import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsersPage from '@pages/users-page/state/reducers/users-page.reducer';


export const selectUsersPageState = createFeatureSelector<fromUsersPage.State>(
    fromUsersPage.usersPagesFeatureKey
);


export const selectAllUsers = createSelector(
    selectUsersPageState,
    fromUsersPage.selectAll
)