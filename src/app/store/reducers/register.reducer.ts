import { Action, createReducer, on } from '@ngrx/store';
import * as fromRegisterActions from '@store/actions';




// fromRegisterActions.
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

  on(fromRegisterActions.registerSuccess,  (state, action) => {
    return {
      ...state,
      response: action.registerResponse,
      error: null,
    };
  }),
  on(fromRegisterActions.registerFailure, (state, action) => {
    return {
      ...state,
      response: null,
      error: action.error,
    };
  }),
);
