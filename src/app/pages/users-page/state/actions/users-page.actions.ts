import { createAction, props } from '@ngrx/store';

export const loadUsersPage = createAction(
  '[employee-table-component] Load Users'
);

export const loadUsersPageSuccess = createAction(
  '[users Effect] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersPageFailure = createAction(
  '[Users Page] Load Users Failure',
  props<{ error: any }>()
);
