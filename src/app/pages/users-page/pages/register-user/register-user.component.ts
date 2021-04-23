import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerPage } from '@pages/users-page/state/actions';
import { selectRegistarPageResponse } from '@pages/users-page/state/selectors/register.selectors';
import { mailValidator } from '@shared/helpers';
import { AppState } from '@store-barrel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  vm$: Observable<any>;

  public form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.vm$ = this.store.pipe(select(selectRegistarPageResponse));
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['jorj-tsere', Validators.required],
      firstName: ['giorgi', Validators.required],
      lastName: ['tsereteli', Validators.required],
      roleID: ['1', Validators.required],
      password: ['123456', Validators.required],
      confirmPassword: ['123456', Validators.required],
      email: ['jorj.tsere@gmail.com', [Validators.required, mailValidator]],
    });
  }

  register(): void {
    if (this.form.valid) {
      const registerRequestPayload = this.form.getRawValue();
      console.log('register()');
      this.store.dispatch(registerPage({ registerRequestPayload }));
    }
  }
}
