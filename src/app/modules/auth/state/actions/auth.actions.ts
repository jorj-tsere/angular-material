import { createAction, props } from '@ngrx/store';
import { ILoginCredentials } from '../../modals/login-credentials';
import { IUser } from '../../modals/user';

export const LoginPage = createAction(
  '[Auth Component] Login User',
  props<{ credentials: ILoginCredentials }>()
);

export const LoginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: IUser }>()
);

export const LoginFailure = createAction(
  '[Auth Fail Effect] Login User Failure',
  props<{ error: any }>()
);
