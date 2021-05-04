import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { noWhitespaceValidator, mailValidator } from '@shared/helpers';
import { AppState } from '@store-barrel';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private location: Location
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {}

  initializeForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, noWhitespaceValidator]],
      user: [null, [Validators.required, noWhitespaceValidator]],
      branches: this.fb.array([]),
    });
    this.addNewBranch();
  }

  deleteBranch(index: number) {
    this.companyBranches.removeAt(index);
  }

  addNewBranch() {
    const newBranch = this.fb.group({
      branchName: [null, [Validators.required, noWhitespaceValidator]],
      countryID: [null, [Validators.required]],
      stateID: [null, [Validators.required]],
      cityID: [null, [Validators.required]],
      addressLine: [null, [Validators.required]],
      addressLineTwo: [null],
      zipCode: [null, [Validators.required]],
      phoneIndex: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
    });
    this.companyBranches.push(newBranch);
  }

  get companyBranches(): FormArray {
    return this.form.controls.branches as FormArray;
  }

  get name(): AbstractControl {
    return this.form.controls.name;
  }

  get user(): AbstractControl {
    return this.form.controls.user;
  }

  navigate_back() {
    this.location.back();
  }

  register(): void {
    this.submitted = true;
    console.log(this.form.getRawValue());
    // if (this.form.valid) {
    //   const registerRequestPayload = this.form.getRawValue();
    //   this.store.dispatch(
    //     fromRegisterActions.registerPage({ registerRequestPayload })
    //   );
    // }
  }
}
