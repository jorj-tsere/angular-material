import { createAction, props } from '@ngrx/store';
import { IAuthRequest } from '../../models/auth-request';
import { IRegisterRequest } from '../../models/register-request';
import { IUser } from '../../models/user';



export const RegisterPage = createAction(
  '[Register-form Component] Register User',
  props<{ registerRequestPayload: IRegisterRequest }>()
);

export const RegisterSuccess = createAction(
  '[Register Effect] Register User Success',
  props<{ registerResponse: any }>()
);

export const RegisterFailure = createAction(
  '[Register Fail Effect] Register User Failure',
  props<{ error: any }>()
);
