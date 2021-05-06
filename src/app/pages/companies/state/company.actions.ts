import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Company } from './company.model';
import { AddCompanyRequest } from '../models';
/**
 * *************************************************************
 * LOAD COMPANIES ACTIONS
 * *************************************************************
 */
export const loadCompanies = createAction(
  '[Company list component] Load Companies',
  props<{ url: string }>()
);

export const loadCompaniesSuccess = createAction(
  '[Company effect] load Companies Success',
  props<{ companies: any[] }>()
);

export const loadCompaniesFailure = createAction(
  '[Company effect] load Companies Failure',
  props<{ error: any }>()
);

/**
 * *************************************************************
 * CREATE NEW COMPANY ACTIONS
 * *************************************************************
 */

 export const addCompany = createAction(
  '[Company add component] Add Company',
  props<{ payload: AddCompanyRequest }>()
);

export const addCompanySuccess = createAction(
  '[Company add Effect] Add Company Success',
  props<{ payload: any }>()
);

export const addCompanyFailure = createAction(
  '[Company add Effect] Add Company Failure',
  props<{ error: any }>()
);

// export const upsertCompany = createAction(
//   '[Company/API] Upsert Company',
//   props<{ company: Company }>()
// );

// export const addCompanys = createAction(
//   '[Company/API] Add Companys',
//   props<{ companys: Company[] }>()
// );

// export const upsertCompanys = createAction(
//   '[Company/API] Upsert Companys',
//   props<{ companys: Company[] }>()
// );

// export const updateCompany = createAction(
//   '[Company/API] Update Company',
//   props<{ company: Update<Company> }>()
// );

// export const updateCompanys = createAction(
//   '[Company/API] Update Companys',
//   props<{ companys: Update<Company>[] }>()
// );

// export const deleteCompany = createAction(
//   '[Company/API] Delete Company',
//   props<{ id: string }>()
// );

// export const deleteCompanys = createAction(
//   '[Company/API] Delete Companys',
//   props<{ ids: string[] }>()
// );

// export const clearCompanys = createAction(
//   '[Company/API] Clear Companys'
// );
