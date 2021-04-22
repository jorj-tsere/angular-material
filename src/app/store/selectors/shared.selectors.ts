import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sharedFeatureKey, State } from '@store/reducers/shared.reducers';


export const selectSharedFeature = createFeatureSelector<State>(
  sharedFeatureKey
);

// Return title from feature
export const selectTitle = createSelector(
  selectSharedFeature,
  (state: State) => state.title
);
