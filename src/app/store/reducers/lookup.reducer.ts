import { Action, createReducer, on } from '@ngrx/store';
import * as LookupActions from '../actions/lookup.actions';

export const lookupFeatureKey = 'lookup';

export interface LookupState {
  adminRoles: any[]
}

export const initialState: LookupState = {
  adminRoles: null
};


export const reducer = createReducer(
  initialState,

  on(LookupActions.loadAdminRolesSuccess, (state,action) => {
    return {
      ...state,
      adminRoles: action.data.data
    }
  }),
  on(LookupActions.loadAdminRolesFailure, (state, action) => {
    return {
      ...state,
      adminRoles: null
    }
  }),

);

