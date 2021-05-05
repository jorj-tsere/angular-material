import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from 'app/services/company.service';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AddCompanyRequest } from '../models';
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
          }),
          catchError((error: Error) =>
            of(fromCompany.loadCompaniesFailure({ error }))
          )
        );
      })
    );
  });

  addCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCompany.addCompany),
      mergeMap((action) => {
        return this.companyService.addCompany(action.payload).pipe(
          map((response) => {
            return fromCompany.addCompanySuccess({ data: response });
          }),
          catchError((error: Error) =>
            of(fromCompany.addCompanyFailure({ error }))
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) { }
}
