import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ɵɵtrustConstantResourceUrl,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminUser } from '@pages/users-page/models';
import { UpdateAdminUserRequest } from '@pages/users-page/models/update-admin-user-request';
import { mailValidator } from '@shared/helpers';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss'],
})
export class UserDetailsFormComponent implements OnInit, OnChanges {
  public form: FormGroup;
  isInit = false;

  @Input() user: AdminUser;
  @Input() adminRoles: any;
  @Output() submitForm = new EventEmitter<UpdateAdminUserRequest>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  initForm() {
    // username: [this.user ? this.user.username : null, Validators.required],
    // email: [this.user ? this.user.email : null, [Validators.required, mailValidator]],
    this.form = this.fb.group({
      firstName: [this.user ? this.user.firstName : null, Validators.required],
      lastName: [this.user ? this.user.lastName : null, Validators.required],
      roleID: [this.user ? this.user.roleID : null, Validators.required],
      isActive: [this.user ? this.user.roleID : null, Validators.required],
    });
    console.log('this.form', this.form.getRawValue());
    // this.isInit = true;
  }

  //  password: [this.user., Validators.required],
  // confirmPassword: ['', Validators.required],

  update() {
    const userForm = this.form.getRawValue();
    userForm.id = this.user.id;
    this.submitForm.emit(userForm);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes &&
      changes.user &&
      changes.user.currentValue &&
      !changes.user.previousValue
    ) {
      this.initForm();
    }
  }
}
