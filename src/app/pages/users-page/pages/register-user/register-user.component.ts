import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { mailValidator } from '@shared/helpers';
import { AppState } from '@store-barrel';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { registerPage } from '@pages/users-page/state/actions/register.actions';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private location: Location) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['giorgi', Validators.required],
      lastName: ['tsereteli', Validators.required],
      roleID: ['1', Validators.required],
      email: ['jorj.tsere@gmail.com', [Validators.required, mailValidator]],
    });
  }

  navigate_back(){
    this.location.back();
  }


  register(): void {
    if (this.form.valid) {
      const registerRequestPayload = this.form.getRawValue();
      console.log('register()');
      this.store.dispatch(registerPage({ registerRequestPayload }));
    }
  }
}
