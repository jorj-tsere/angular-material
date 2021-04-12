import { createAction, props } from '@ngrx/store';
import { Post } from 'app/models';



export const loadAllSucceeded = createAction(
  '[Posts API] Load All Succeeded',
  props<{ posts: Post[] }>()
);

export const loadAllFailed = createAction(
  '[Posts API] Load All Failed',
  props<{ error: string }>()
);

export const loadCategorySucceeded = createAction(
  '[Posts API] Load Category Succeeded',
  props<{ posts: Post[] }>()
);

export const loadCategoryFailed = createAction(
  '[Posts API] Load Category Failed',
  props<{ error: string }>()
);