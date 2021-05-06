import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as SharedReducer  from '@store/reducers/shared.reducers';


export const selectSharedFeature = createFeatureSelector<SharedReducer.SharedState>(
  SharedReducer.sharedFeatureKey
);

// Return title from feature
export const selectTitle = createSelector(
  selectSharedFeature,
  (state: SharedReducer.SharedState) => state.title
);
