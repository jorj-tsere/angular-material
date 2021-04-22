import { createAction, props } from '@ngrx/store';

export const sharedSelectDefaultSettings = createAction(
  '[Shared settings] select settings'
);


export const sharedUpdateSettings = createAction(
  '[Shared settings] update settings',
  props<{ data: any }>()
);


export const sharedInitShellSettings = createAction(
  '[Shared settings] Init Shell Settings',
  props<{ data: any }>()
);
