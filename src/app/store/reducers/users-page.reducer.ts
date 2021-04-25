import { Action, createReducer, on } from '@ngrx/store';
import * as UsersPageActions from '../actions/users-page.actions';

export const usersPageFeatureKey = 'usersPage';

export interface State {
  users: object,
  selectedUserId: number,
  loading: boolean,
  error: any
}

export const initialState: State = {
  users: null,
  selectedUserId: null,
  loading: null,
  error: null
};

export const reducer = createReducer(
  initialState,

  on(UsersPageActions.loadUsersPage, (state) => {
    return {
      ...state,
      users: null,
      selectedUserId: null,
      loading: true,
      error: null
    }
  }),
  on(UsersPageActions.loadUsersPageSuccess, (state, action: any) => {
    return {
      ...state,
      users: action.data,
      loading: false,
    }
  }),
  on(UsersPageActions.loadUsersPageFailure, (state, action) => {
    return {
      ...state,
      users: null,
      loading: false,
      error: action.error
    }
  }),
);

