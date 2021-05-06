import { StaticReflector } from '@angular/compiler';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminRole } from '@pages/users-page/components';
import * as fromLookup from '../reducers/lookup.reducer';

export const selectLookupState = createFeatureSelector<fromLookup.LookupState>(
  fromLookup.lookupFeatureKey
);


export const selectLookupViewModel = createSelector(
  selectLookupState,
  (state: fromLookup.LookupState): any => {
    return {
      adminRoles: state.adminRoles
    };
  }
);


export const selectAdminRoles = createSelector(
  selectLookupState,
  (state: fromLookup.LookupState): AdminRole[] => state.adminRoles
);

export const isAdminRolesExists = createSelector(
  selectLookupState,
  (state: fromLookup.LookupState): boolean => {
    return state.adminRoles && state.adminRoles.length ? true : false;
  }
);



export const getCount = createSelector(
  selectLookupState,
  (state: fromLookup.LookupState, props: any) => {
    const adminRoles = [...state.adminRoles];
    const filteredItems = adminRoles.filter((role: AdminRole) => +role.id === +props.id);
    console.log('filteredItems', filteredItems);

    return {
      test: 1
    }
    //  props.id
    // return  * props.multiply
  },
)
