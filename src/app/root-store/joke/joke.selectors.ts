import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromJoke from './joke.reducer';
import { State } from './jokes-state';

// Lookup the 'Joke' feature state managed by NgRx
const getJokeState = createFeatureSelector<State>(
  fromJoke.jokeFeatureKey
);

export const selectJokeList = createSelector(
  getJokeState,
  state => state.jokes
);

export const selectJokeError = createSelector(
  getJokeState,
  state => state.error
);

export const selectJokeIsLoading = createSelector(
  getJokeState,
  state => state.isLoading
);

export const selectAppComponentJokeViewModel = createSelector(
  selectJokeList,
  selectJokeError,
  selectJokeIsLoading,
  (jokes, error, loading) => ({
    jokes,
    error,
    loading
  })
);