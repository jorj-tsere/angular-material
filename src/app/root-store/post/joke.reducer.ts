import { Action, createReducer, on } from '@ngrx/store';
import * as JokeAPIActions from './api.actions';
import { State } from './jokes-state';
import * as JokeUIActions from './ui.actions';


export const jokeFeatureKey = 'JOKE_STORE';

export const initialState: State = {
  jokes: [],
  isLoading: false,
  error: ''
};

const jokeReducer = createReducer(
  initialState,
  on(
    JokeUIActions.appComponentInitialized,
    JokeUIActions.loadAllRequested,
    state => {
      console.log('[[reducer]] JokeUIActions.appComponentInitialized | JokeUIActions.loadAllRequested,', state);
      return ({ ...state, isLoading: true, error: '' });
    }
  ),
  on(
    JokeAPIActions.loadAllSucceeded,
    JokeAPIActions.loadCategorySucceeded,
    (state, { jokes }) => {

      console.log('[[reducer]] JokeAPIActions.loadAllSucceeded | JokeAPIActions.loadCategorySucceeded', jokes);

      return ({
        ...state,
        jokes,
        isLoading: false,
      });
    }
  ),
  on(
    JokeAPIActions.loadAllFailed,
    JokeAPIActions.loadCategoryFailed,
    (state, { error }) =>  {

      console.log('[[reducer]] JokeAPIActions.loadAllFailed | JokeAPIActions.loadCategoryFailed,', error);

      return  ({
        ...state,
        error,
        isLoading: false
      });
    }
  )
);

export function reducer(state: State | undefined, action: Action) {
  return jokeReducer(state, action);
}