import { createAction, props } from '@ngrx/store';

export const loadAdminRoles = createAction(
  '[Lookup Admin Roles] Load Admin Roles'
);

export const loadAdminRolesSuccess = createAction(
  '[Lookup Admin Roles || effect] Load Admin Roles Success',
  props<{ data: any }>()
);

export const loadAdminRolesFailure = createAction(
  '[Lookup Admin Roles || effect] Load Admin Roles Failure',
  props<{ error: any }>()
);
