import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, State, Store } from '@ngrx/store';
import { mailValidator } from 'app/@shared/helpers';
import { AppState } from 'app/store';
import { Observable } from 'rxjs';
import * as fromRegisterActions from '../../state/actions/register.actions';
import * as fromRegisterSelectors from '../../state/selectors/register.selectors';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  
  // @Output() sendSignForm = new EventEmitter<void>();

  vm$: Observable<any>;

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.vm$ = this.store.pipe(select(fromRegisterSelectors.selectRegistarPageResponse))
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
      this.store.dispatch(fromRegisterActions.RegisterPage({ registerRequestPayload }))
    }
  }
}
