import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '../../models/user';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: IUser;
  error: any;
}

export const initialState: State = {
  user: {
    id: null,
    username: null,
    email: null,
    is_admin: null,
  },
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.LoginSuccess,AuthActions.BrowserReload,  (state, action) => {

    const userTest = {
      id: 45,
      username: 'jorj',
      email: 'jorj.tsere@gmail.com',
      is_admin: true,
    };

    return {
      ...state,
      user: userTest,
      error: null,
    };
  }),
  on(AuthActions.LoginFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        username: null,
        email: null,
        is_admin: null,
      },
      error: action.error,
    };
  }),
  on(AuthActions.Logout, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        username: null,
        email: null,
        is_admin: null,
      },
      error: null,
    };
  })
);
