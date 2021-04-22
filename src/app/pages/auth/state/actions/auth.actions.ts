import { createAction, props } from '@ngrx/store';
import { IAuthRequest } from '../../models/auth-request';
import { IUser } from '../../models/user';



export const loginPage = createAction(
  '[Auth Component] Login User',
  props<{ credentials: IAuthRequest }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ response: any }>()
);

export const loginFailure = createAction(
  '[Auth Fail Effect] Login User Failure',
  props<{ error: any }>()
);

export const logout = createAction('[user Component] Logout User');

export const browserReload = createAction(
  '[Core Component] Browser Reload',
  props<{ user: IUser }>()
);
