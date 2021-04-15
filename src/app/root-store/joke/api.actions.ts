import { createAction, props } from '@ngrx/store';
import { Joke } from 'app/models';


export enum JokeApiActionTypes {
  LOAD_ALL_SUCCEEDED = '[Jokes API] Load All Succeeded',
  LOAD_ALL_FAILD = '[Jokes API] Load All Failed',
  LOAD_CATEGORY_SUCCEEDED = '[Jokes API] Load Category Succeeded',
  LOAD_CATEGORY_FAILED = '[Jokes API] Load Category Failed',
}


export const loadAllSucceeded = createAction(
  JokeApiActionTypes.LOAD_ALL_SUCCEEDED,
  props<{ jokes: Joke[] }>()
);

export const loadAllFailed = createAction(
  JokeApiActionTypes.LOAD_ALL_FAILD,
  props<{ error: string }>()
);

export const loadCategorySucceeded = createAction(
  JokeApiActionTypes.LOAD_CATEGORY_SUCCEEDED,
  props<{ jokes: Joke[] }>()
);

export const loadCategoryFailed = createAction(
  JokeApiActionTypes.LOAD_CATEGORY_FAILED,
  props<{ error: string }>()
);