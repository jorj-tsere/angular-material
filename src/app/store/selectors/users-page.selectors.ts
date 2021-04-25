import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsersPage from '../reducers/users-page.reducer';

export const selectUsersPageState = createFeatureSelector<fromUsersPage.State>(
  fromUsersPage.usersPageFeatureKey
);


export const selectUsersPageViewModel = createSelector(
  selectUsersPageState,
  (state: fromUsersPage.State): any => {
    return {
      users: state.users,
      error: state.error,
      loading: state.loading,
      selectedUserId: state.selectedUserId
    }
  }
);
