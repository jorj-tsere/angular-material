import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Company } from './company.model';
import * as CompanyActions from './company.actions';

export const companiesFeatureKey = 'companies';

export interface State extends EntityState<Company> {
  loading: boolean;
  error: any;
  selectedCompanyID: number;
}

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>();

export const initialState: State = adapter.getInitialState({
  loading: null,
  error: null,
  selectedCompanyID: null,
});

export const reducer = createReducer(
  initialState,
  on(CompanyActions.loadCompaniesSuccess, (state, action) =>
    adapter.setAll(action.companies, {
      ...state,
      loading: false
    })
  ),
  on(CompanyActions.loadCompaniesFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: false,
    };
  }),
  on(CompanyActions.loadCompanies, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(CompanyActions.addCompany, (state, action: any) => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(CompanyActions.addCompanySuccess, (state, action: any) => {
    return adapter.addOne(action.payload.branch, {
      ...state,
      loading: true
    });
  }),
  on(CompanyActions.addCompanyFailure, (state, action: any) => {
    return {
      ...state,
      error: action.error,
      loading: true
    }
  })
);
//   on(CompanyActions.upsertCompany, (state, action) =>
//     adapter.upsertOne(action.company, state)
//   ),

//   on(CompanyActions.upsertCompanys, (state, action) =>
//     adapter.upsertMany(action.companys, state)
//   ),
//   on(CompanyActions.updateCompany, (state, action) =>
//     adapter.updateOne(action.company, state)
//   ),
//   on(CompanyActions.updateCompanys, (state, action) =>
//     adapter.updateMany(action.companys, state)
//   ),
//   on(CompanyActions.deleteCompany, (state, action) =>
//     adapter.removeOne(action.id, state)
//   ),
//   on(CompanyActions.deleteCompanys, (state, action) =>
//     adapter.removeMany(action.ids, state)
//   ),
//   on(CompanyActions.loadCompanys, (state, action) =>
//     adapter.setAll(action.companys, state)
//   ),
//   on(CompanyActions.clearCompanys, (state) => adapter.removeAll(state))

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
