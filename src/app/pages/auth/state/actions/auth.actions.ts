import { createAction, props } from '@ngrx/store';
import { ILoginCredentials } from '../../models/login-credentials';
import { IUser } from '../../models/user';

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

export const Logout = createAction('[user Component] Logout User');

export const BrowserReload = createAction(
  '[Core Component] Browser Reload',
  props<{ user: IUser }>()
);
