import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthLinksViewModel, IUser } from '@pages/auth/models';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const isLogged = createSelector(
  selectAuthState,
  (state: fromAuth.State): boolean => state.user != null
);


export const selectAuthLinksViewModel = createSelector(
  selectAuthState,
  isLogged,
  (state: fromAuth.State, isLoggedIn: boolean): IAuthLinksViewModel => {
    return {
      isAdmin: +state.user.roleID === 1,
      isLoggedin: isLoggedIn,
    };
  }
);

export const selectLoggedUser = createSelector(
  selectAuthState,
  isLogged,
  (state: fromAuth.State, isLoggedIn: boolean): IUser => state.user
);
