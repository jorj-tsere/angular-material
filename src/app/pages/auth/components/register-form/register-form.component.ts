import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { mailValidator } from 'app/@shared/helpers';
import { AppState } from 'app/store';
import { RegisterPage } from 'auth-page/state/actions/register.actions';
import { selectRegistarPageResponse } from 'auth-page/state/selectors/register.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
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
      this.store.dispatch(RegisterPage({ registerRequestPayload }));
    }
  }
}
