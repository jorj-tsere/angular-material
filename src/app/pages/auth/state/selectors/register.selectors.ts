import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from '../../models';
import * as fromRegister from '../reducers/register.reducer';

export const selectRegisterState = createFeatureSelector<fromRegister.State>(
  fromRegister.RegisterFeatureKey
);

export const selectRegistarPageResponse = createSelector(
  selectRegisterState,
  (state: fromRegister.State) => {
    return {
      response: state.response,
      error: state.error,
    };
  }
);
