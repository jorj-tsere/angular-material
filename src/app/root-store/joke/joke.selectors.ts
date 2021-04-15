import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Joke } from 'app/models/joke';
import * as fromJoke from './joke.reducer';
import { State } from './jokes-state';

// Lookup the 'Joke' feature state managed by NgRx
const selectJokeState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>(
  fromJoke.jokeFeatureKey
);

const getJokes = (state: State): Joke[] => state.jokes;
const getError = (state: State): any => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;

const getJokeViewModel = (jokes: Joke[], error: any, loading: boolean) => ({
  jokes,
  error,
  loading
})


export const selectJokeList: MemoizedSelector<
  object,
  Joke[]
> = createSelector(
  selectJokeState,
  getJokes
);


export const selectJokeError: MemoizedSelector<object, any> = createSelector(
  selectJokeState,
  getError
);

export const selectJokeIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectJokeState,
  getIsLoading
);

export const selectAppComponentJokeViewModel = createSelector(
  selectJokeList,
  selectJokeError,
  selectJokeIsLoading,
  getJokeViewModel
);