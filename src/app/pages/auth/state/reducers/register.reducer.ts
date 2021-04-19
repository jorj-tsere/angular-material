import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '../../models/user';
import * as fromRegisterActions from '../actions/register.actions';

export const RegisterFeatureKey = 'register';

export interface State {
  response: any;
  error: any;
}

export const initialState: State = {
    response: null,
    error: null
};

export const reducer = createReducer(
  initialState,

  on(fromRegisterActions.RegisterSuccess,  (state, action) => {
    return {
      ...state,
      response: action.registerResponse,
      error: null,
    };
  }),
  on(fromRegisterActions.RegisterFailure, (state, action) => {
    return {
      ...state,
      response: null,
      error: action.error,
    };
  }),
);
