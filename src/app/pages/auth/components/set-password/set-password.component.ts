import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { mailValidator } from '@shared/helpers';
import { AppState } from '@store-barrel';
import { CustomValidationService } from 'app/services/customValidation.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss'],
})
export class SetPasswordComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private customValidator: CustomValidationService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {}

  initializeForm(): void {
    this.form = this.fb.group(
      {
        password: [
          '',
          Validators.compose([
            Validators.required,
            this.customValidator.patternValidator(),
          ]),
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: this.customValidator.MatchPassword(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  get formControls() {
    return this.form.controls;
  }

  setPassword() {
    this.submitted = true;
  }
}
