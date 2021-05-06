import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '@pages/auth/models';
import { loginSuccess, browserReload, loginFailure, logoutSuccess } from '@store/actions/auth.actions';


export const authFeatureKey = 'auth';

export interface State {
  user: IUser;
  error: any;
  loading: boolean;
}

export const initialState: State = {
  user: null,
  error: null,
  loading: null,
};

export const reducer = createReducer(
  initialState,

  on(loginSuccess, browserReload, (state, action) => {
    return {
      ...state,
      user: action.loggedUser,
      error: null,
      loading: false
    };
  }),
  on(loginFailure, (state, action) => {
    return {
      ...state,
      user: null,
      error: action.error,
    };
  }),
  on(logoutSuccess, (state, action) => {
    return {
      ...state,
      user: null,
      loading: false,
      error: null,
    };
  })
);
