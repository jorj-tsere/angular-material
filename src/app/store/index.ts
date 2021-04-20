import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCustomerSupport from './reducers/customer-support.reducer';
import * as fromAuth from '../pages/auth/state/reducers/auth.reducer';
import * as fromRegister from '../pages/auth/state/reducers/register.reducer';
import * as fromUsersPage from '../pages/users-page/state/reducers/users-page.reducer';


export interface AppState {

  [fromCustomerSupport.customerSupportFeatureKey]: fromCustomerSupport.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromRegister.RegisterFeatureKey]: fromRegister.State;  [fromUsersPage.usersPageFeatureKey]: fromUsersPage.State;

}

export const reducers: ActionReducerMap<AppState> = {

  [fromCustomerSupport.customerSupportFeatureKey]: fromCustomerSupport.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromRegister.RegisterFeatureKey]: fromRegister.reducer,
  [fromUsersPage.usersPageFeatureKey]: fromUsersPage.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
