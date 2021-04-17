import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CustomerMessage } from 'app/@shared/models/customer-message';
import { AppState } from 'app/store';
import * as customerSupportActions from 'app/store/actions/customer-support.actions'
import * as fromSupportSelectors from 'app/store/selectors/customer-support.selectors';
import { selectName } from 'app/store/selectors/customer-support.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
})
export class CustomerSupportComponent implements OnInit {
  customerSupportForm: FormGroup;
  vm$: Observable<fromSupportSelectors.CustomerSupportViewModel>;
  name$: Observable<string>;
  isSendSuccess: boolean | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.customerSupportForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  getFormValue(): CustomerMessage {
    return this.customerSupportForm.getRawValue();
  }

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(fromSupportSelectors.selectCustomerSupportModel));
  }

  onSubmit() {
    this.store.dispatch(
      customerSupportActions.sendingCustomerSupportMessage({
        data: this.getFormValue(),
      })
    );
    this.isSendSuccess = true;
  }
}
