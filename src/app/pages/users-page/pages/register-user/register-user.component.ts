import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { mailValidator } from '@shared/helpers';
import { AppState } from '@store-barrel';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import * as fromRegisterActions from '@pages/users-page/state/actions/register.actions';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private location: Location) {
    this.initializeForm();
  }

  ngOnInit(): void {}


  initializeForm(): void {
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      roleID: [null, [Validators.required, Validators.min(1)]],
      email: [null, [Validators.required, mailValidator]],
    });
  }


  get firstName(): AbstractControl {
    return this.form.controls.firstName;
  }

  get lastName(): AbstractControl {
    return this.form.controls.lastName;
  }

  get roleID(): AbstractControl {
    return this.form.controls.roleID;
  }

  get email(): AbstractControl {
    return this.form.controls.email;
  }

  navigate_back() {
    this.location.back();
  }


  register(): void {
    if (this.form.valid) {
      const registerRequestPayload = this.form.getRawValue();
      this.store.dispatch(fromRegisterActions.registerPage({ registerRequestPayload }));
    }
  }
}
