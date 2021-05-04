import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesPageWrapperComponent } from './container/companies-page-wrapper/companies-page-wrapper.component';
import {
  AddCompanyComponent,
  CompanyListComponent,
  UpdateCompanyComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPageWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: CompanyListComponent,
      },
      {
        path: 'edit/:id',
        component: UpdateCompanyComponent,
      },
      {
        path: 'register',
        component: AddCompanyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
