import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegister from '../../../auth/state/reducers/register.reducer';

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
