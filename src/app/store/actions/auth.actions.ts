import { createAction, props } from '@ngrx/store';
import { IAuthRequest } from '../../pages/auth/models/auth-request';
import { IUser } from '../../pages/auth/models/user';

export const loginPage = createAction(
  '[Auth Component] Login User',
  props<{ credentials: IAuthRequest }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ loggedUser: IUser }>()
);

export const loginFailure = createAction(
  '[Auth Fail Effect] Login User Failure',
  props<{ error: any }>()
);

export const logout = createAction('[user Component] Logout User');

export const logoutSuccess = createAction(
  '[auth effect Component] Logout User Success',
  props<{ message: string }>()
);

export const logoutFailure = createAction(
  '[auth effect Component] Logout User Failure',
  props<{ error: string }>()
);

export const browserReload = createAction(
  '[Core Component] Browser Reload',
  props<{ loggedUser: IUser }>()
);
