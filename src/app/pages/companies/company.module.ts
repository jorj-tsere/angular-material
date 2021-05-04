import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompaniesPageWrapperComponent } from './container/companies-page-wrapper/companies-page-wrapper.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { AddCompanyComponent } from './pages/add-company/add-company.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromCompany from './state/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './state/company.effects';
import { CompanyListTableComponent } from './components';
import { UpdateCompanyComponent } from './pages';

@NgModule({
  declarations: [
    CompaniesPageWrapperComponent,
    CompanyListComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    CompanyListTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CompanyRoutingModule,
    StoreModule.forFeature(
      fromCompany.companiesFeatureKey,
      fromCompany.reducer
    ),
    EffectsModule.forFeature([CompanyEffects]),
  ],
})
export class CompanyModule {}
