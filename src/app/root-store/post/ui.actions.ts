import { createAction, props } from '@ngrx/store';

export const appComponent2Initialized = createAction(
  '[App POST Component] Initialized'
);

export const loadAll2Requested = createAction(
  '[App POST Component] Load All Requested'
);

export const loadCategory2Requested = createAction(
  '[App POST Component] Load Category Requested',
  props<{ category: string }>()
);