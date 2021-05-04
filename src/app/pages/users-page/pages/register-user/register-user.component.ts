import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { mailValidator, noWhitespaceValidator } from '@shared/helpers';
import { AppState } from '@store-barrel';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import * as fromRegisterActions from '@pages/users-page/state/actions/register.actions';
import { loadAdminRoles } from '@store/actions/lookup.actions';
import {
  isAdminRolesExists,
  selectAdminRoles,
} from '@store/selectors/lookup.selectors';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  adminRoles$: Observable<any[]>;
  isAdminRolesExists$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private location: Location
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.isAdminRolesExists$ = this.store.pipe(select(isAdminRolesExists));
    this.adminRoles$ = this.isAdminRolesExists$.pipe(
      mergeMap((isListInSotre) => {
        if (!isListInSotre) {
          this.store.dispatch(loadAdminRoles());
        }
        return this.store.pipe(select(selectAdminRoles));
      })
    );
  }

  initializeForm(): void {
    this.form = this.fb.group({
      firstName: [null, [Validators.required, noWhitespaceValidator]],
      lastName: [null, [Validators.required, noWhitespaceValidator]],
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
    this.submitted = true;
    if (this.form.valid) {
      const registerRequestPayload = this.form.getRawValue();
      this.store.dispatch(
        fromRegisterActions.registerPage({ registerRequestPayload })
      );
    }
  }
}
