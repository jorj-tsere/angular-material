import { createAction, props } from '@ngrx/store';
import { IAuthRequest } from '../../models/auth-request';
import { IUser } from '../../models/user';



export const LoginPage = createAction(
  '[Auth Component] Login User',
  props<{ credentials: IAuthRequest }>()
);

export const LoginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ response: any }>()
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
