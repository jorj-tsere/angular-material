import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCompany from '@pages/companies/state/company.reducer';
import { AdminUser } from '@pages/users-page/models';
import { Company } from './company.model';

export const selectCompaniesState = createFeatureSelector<fromCompany.CompanyState>(
  fromCompany.companiesFeatureKey
);

export const selectAllCompanies = createSelector(
  selectCompaniesState,
  fromCompany.selectAll
);

export const selectAllIDs = createSelector(
  selectCompaniesState,
  fromCompany.selectIds
);

export const selectAllEntities = createSelector(
  selectCompaniesState,
  fromCompany.selectEntities
);

export const selectLoadingStatus = createSelector(
  selectCompaniesState,
  (state): boolean => {
    return state.loading;
  }
);

export const selectError = createSelector(
  selectCompaniesState,
  (state): boolean => {
    return state.error;
  }
);

export const selectEntity = createSelector(
  selectAllEntities,
  (entities: any, props: any) => entities[props.id]
);

export const entityExists = createSelector(
  selectAllEntities,
  (entities: any, props: any): boolean => {
    return entities[props.id] !== undefined ? true : false;
  }
);

export const selectEntityById = createSelector(
  selectAllEntities,
  (entities: any, props: any): Company => {
    console.log('props', props, 'then', entities, entities[props.id]);
    return entities[props.id];
  }
);


export const selectAllCompaniesViewModel = createSelector(
  selectAllCompanies,
  selectLoadingStatus,
  selectError,
  (companies: Company[], loading: boolean, error: any): any => {
    return {
      companies,
      loading,
      error
    }
  }
);
