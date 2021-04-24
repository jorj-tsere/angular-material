import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCustomerSupport from './reducers/customer-support.reducer';
import * as fromShared from './reducers/shared.reducers';
import * as fromAuth from './reducers/auth.reducer';
import * as fromRegister from './reducers/register.reducer';
import * as fromUsersPage from '../pages/users-page/state/reducers/users-page.reducer';
import * as fromRouter from '@ngrx/router-store';
import * as fromLookup from './reducers/lookup.reducer';

export interface AppState {
  [fromCustomerSupport.customerSupportFeatureKey]: fromCustomerSupport.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromRegister.RegisterFeatureKey]: fromRegister.State;
  [fromUsersPage.usersPageFeatureKey]: fromUsersPage.State;
  router: fromRouter.RouterReducerState;
  [fromShared.sharedFeatureKey]: fromShared.State;
  [fromLookup.lookupFeatureKey]: fromLookup.State;

}

export const reducers: ActionReducerMap<AppState> = {
  [fromCustomerSupport.customerSupportFeatureKey]: fromCustomerSupport.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromRegister.RegisterFeatureKey]: fromRegister.reducer,
  [fromUsersPage.usersPageFeatureKey]: fromUsersPage.reducer,
  router: fromRouter.routerReducer,
  [fromShared.sharedFeatureKey]: fromShared.reducer,
  [fromLookup.lookupFeatureKey]: fromLookup.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

// debug

// export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
//   return (state, action) => {
//     console.log('state,', state);
//     console.log('action,', action);

//     return reducer(state, action);
//   };
// }
