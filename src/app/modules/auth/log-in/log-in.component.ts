import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store';
import { ILoginCredentials } from '../modals/login-credentials';
import * as fromAuthActions from '../state/actions/auth.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  form: FormGroup;
  error: any = null;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit() {
    const credentials: ILoginCredentials = this.form.getRawValue();
    this.store.dispatch(fromAuthActions.LoginPage({ credentials }));
  }
}
