import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromCompanyActions from '@pages/companies/state/company.actions';
import * as fromCompanySelectors from '@pages/companies/state/company.selectors';

import { AppState } from '@store-barrel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  public vm$: Observable<any>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(fromCompanySelectors.selectAllCompanies));
    this.store.dispatch(fromCompanyActions.loadCompanies({ url: '' }));
  }
}
