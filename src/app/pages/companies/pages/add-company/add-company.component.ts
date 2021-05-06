import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { noWhitespaceValidator, mailValidator } from '@shared/helpers';
import { AppState } from '@store-barrel';
import { addCompany } from '@pages/companies/state/company.actions';
import { AddCompanyRequest } from '@pages/companies/models';
import { Observable } from 'rxjs';
import { selectAllIDs, selectLoadingStatus } from '@pages/companies/state/company.selectors';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public newCompanyID: number;
  public isLoading$: Observable<boolean>;
  public temporaryList = [
    {
      id: 1, name: 'value 1'
    },
    {
      id: 2, name: 'value 2'
    },
    {
      id: 3, name: 'value 3'
    },
    {
      id: 4, name: 'value 4'
    },
  ]

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private location: Location
  ) {
    this.initializeForm();
  }

  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(selectLoadingStatus));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      name: ['company name temp', [Validators.required, noWhitespaceValidator]],
      user: [1, [Validators.required]],
      branches: this.fb.array([]),
    });
    this.addNewBranch();
  }

  deleteBranch(index: number) {
    this.companyBranches.removeAt(index);
  }

  addNewBranch() {
    const newBranch = this.fb.group({
      name: ['new branch', [Validators.required, noWhitespaceValidator]],
      countryID: [1, [Validators.required]],
      stateID: [1, [Validators.required]],
      cityID: [1, [Validators.required]],
      addressLine: ['addressLine', [Validators.required]],
      addressLineTwo: ['addressLine 2'],
      zipCode: ['152145', [Validators.required]],
      phoneIndex: [1, [Validators.required]],
      phoneNumber: ['551473729', [Validators.required]],
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
    if (this.form.valid) {
      const payload: AddCompanyRequest = this.form.getRawValue();
      this.store.dispatch(addCompany({ payload }))
    }
  }
}
