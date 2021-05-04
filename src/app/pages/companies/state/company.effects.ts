import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from 'app/services/company.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as fromCompany from './company.actions';

@Injectable()
export class CompanyEffects {
  loadCompanies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCompany.loadCompanies),
      mergeMap((action) => {
        return this.companyService.getCompanyList().pipe(
          map((response) => {
            return fromCompany.loadCompaniesSuccess({ companies: response });
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}
}
