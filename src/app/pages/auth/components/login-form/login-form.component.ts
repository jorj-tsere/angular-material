import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAuthRequest } from '@pages/auth/models';
import { AppState } from '@store-barrel';
import * as fromAuthActions from 'auth-page/state/actions/auth.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  error: any = null;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    const credentials: IAuthRequest = this.form.getRawValue();
    this.store.dispatch(fromAuthActions.LoginPage({ credentials }));
  }
}
