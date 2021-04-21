import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CustomerMessage } from '@shared/models/customer-message';
import { AppState } from '@store-barrel';
import * as fromCustomerSupportActions from '@store/actions';
import {
  CustomerSupportViewModel,
  selectCustomerSupportModel,
} from '@store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
})
export class CustomerSupportComponent implements OnInit {
  customerSupportForm: FormGroup;
  vm$: Observable<CustomerSupportViewModel>;
  name$: Observable<string>;
  isSendSuccess: boolean | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.customerSupportForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  getFormValue(): CustomerMessage {
    return this.customerSupportForm.getRawValue();
  }

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(selectCustomerSupportModel));
  }

  onSubmit() {
    this.store.dispatch(
      fromCustomerSupportActions.sendingCustomerSupportMessage({
        data: this.getFormValue(),
      })
    );
    this.isSendSuccess = true;
  }
}
