import { createAction, props } from '@ngrx/store';
import { IRegisterRequest } from '@pages/users-page/models/register-request';

export const registerPage = createAction(
  '[Register-form Component] Register User',
  props<{ registerRequestPayload: IRegisterRequest }>()
);

export const registerSuccess = createAction(
  '[Register Effect] Register User Success',
  props<{ registerResponse: any }>()
);

export const registerFailure = createAction(
  '[Register Fail Effect] Register User Failure',
  props<{ error: any }>()
);
