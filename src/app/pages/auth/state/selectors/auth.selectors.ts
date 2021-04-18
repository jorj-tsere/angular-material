import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthLinksViewModel, IUser } from '../../models';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: fromAuth.State): boolean => state.user.id != null
);

export const selectAuthLinksViewModel = createSelector(
  selectAuthState,
  selectIsLoggedIn,
  (state: fromAuth.State, isLoggedIn: boolean): IAuthLinksViewModel => {
    return {
      isAdmin: state.user.is_admin,
      isLoggedin: isLoggedIn,
    };
  }
);

export const selectLoggedUser = createSelector(
  selectAuthState,
  selectIsLoggedIn,
  (state: fromAuth.State, isLoggedIn: boolean): IUser => {
    return {
      id: state.user.id,
      username: state.user.username,
      email: state.user.email,
      is_admin: state.user.is_admin,
    };
  }
);
