import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User } from '@pages/users-page/models';


export const loadUsers = createAction(
  '[User-Page -- User List page] Load Users',
);

export const loadUsersSuccess = createAction(
  '[User-Page Effect] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User-Page Effect] Load Users Failure',
  props<{ error: any }>()
);




export const loadUser = createAction(
  '[User-Details-Page] Load User Details',
  props<{ id: number }>()
);

export const loadUserSuccess = createAction(
  '[User-Details-Page Effect] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[User-Details-Page Effect] Load User Failure',
  props<{ error: any }>()
);

// export const addUsersPage = createAction(
//   '[UsersPage/API] Add UsersPage',
//   props<{ usersPage: UsersPage }>()
// );

// export const upsertUsersPage = createAction(
//   '[UsersPage/API] Upsert UsersPage',
//   props<{ usersPage: UsersPage }>()
// );

// export const addUsersPages = createAction(
//   '[UsersPage/API] Add UsersPages',
//   props<{ usersPages: UsersPage[] }>()
// );

// export const upsertUsersPages = createAction(
//   '[UsersPage/API] Upsert UsersPages',
//   props<{ usersPages: UsersPage[] }>()
// );

// export const updateUsersPage = createAction(
//   '[UsersPage/API] Update UsersPage',
//   props<{ usersPage: Update<UsersPage> }>()
// );

// export const updateUsersPages = createAction(
//   '[UsersPage/API] Update UsersPages',
//   props<{ usersPages: Update<UsersPage>[] }>()
// );

// export const deleteUsersPage = createAction(
//   '[UsersPage/API] Delete UsersPage',
//   props<{ id: string }>()
// );

// export const deleteUsersPages = createAction(
//   '[UsersPage/API] Delete UsersPages',
//   props<{ ids: string[] }>()
// );

// export const clearUsersPages = createAction(
//   '[UsersPage/API] Clear UsersPages'
// );
