import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '@pages/auth/models';
import {
  loginSuccess,
  browserReload,
  logoutSuccess,
  loginFailure,
} from '@store/actions';

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

  on(loginSuccess, browserReload, (state, action) => {
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
  on(loginFailure, (state, action) => {
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
  on(logoutSuccess, (state, action) => {
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
