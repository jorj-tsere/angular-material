import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminUser } from '@pages/users-page/models';
import { UpdateAdminUserRequest } from '@pages/users-page/models/update-admin-user-request';
import { ConfirmComponent } from '@shared/components/confirm/confirm.component';
import { mailValidator, noWhitespaceValidator } from '@shared/helpers';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss'],
})
export class UserDetailsFormComponent implements OnInit, OnChanges {
  public form: FormGroup;
  isInit = false;
  submitted = false;

  @Input() user: AdminUser;
  @Input() adminRoles: any;
  @Output() submitForm = new EventEmitter<UpdateAdminUserRequest>();
  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {}

  initForm() {
    // username: [this.user ? this.user.username : null, Validators.required],
    // email: [this.user ? this.user.email : null, [Validators.required, mailValidator]],
    this.form = this.fb.group({
      firstName: [
        this.user ? this.user.firstName : null,
        [Validators.required, noWhitespaceValidator],
      ],
      lastName: [
        this.user ? this.user.lastName : null,
        [Validators.required, noWhitespaceValidator],
      ],
      roleID: [this.user ? this.user.roleID : null, Validators.required],
      isActive: [this.user ? this.user.roleID : null, Validators.required],
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

  get isActive(): AbstractControl {
    return this.form.controls.isActive;
  }

  //  password: [this.user., Validators.required],
  // confirmPassword: ['', Validators.required],

  update() {
    this.submitted = true;
    const userForm = this.form.getRawValue();
    userForm.id = this.user.id;
    this.submitForm.emit(userForm);
  }

  resetPassword() {}

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {
        title: 'title 1',
        qustion: 'are you sure?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
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
