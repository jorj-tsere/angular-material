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
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, mailValidator]],
    });
  }

  register(): void {
    if (this.form.valid) {
      const registerRequestPayload = this.form.getRawValue();
      this.store.dispatch(registerPage({ registerRequestPayload }));
    }
  }
}
