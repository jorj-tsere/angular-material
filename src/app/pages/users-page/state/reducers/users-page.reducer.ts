import { Action, createReducer, on } from '@ngrx/store';
import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
  Update,
} from '@ngrx/entity';
import { AdminUser } from '../../models/admin-user';
import * as UsersPageActions from '../actions/users-page.actions';
import * as fromUserDetailsPage from '../actions/user-details.actions';
import { UpdateAdminUserRequest } from '@pages/users-page/models/update-admin-user-request';

export const usersPagesFeatureKey = 'usersPages';

export interface UsersState extends EntityState<AdminUser> {
  selectedUserId: number;
  loading: boolean;
  error: any;
}

/*
   {
    sortComparer: false,
    selectId: (user: AdminUser) => {
      return user.username;
    },
  }
*/

export const adapter: EntityAdapter<AdminUser> = createEntityAdapter<AdminUser>();

export const initialState: UsersState = adapter.getInitialState({
  selectedUserId: null,
  loading: null,
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(UsersPageActions.loadUsersSuccess, (state, action) =>
    adapter.setAll(action.users, state)
  ),
  on(UsersPageActions.loadUsersFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),

  on(UsersPageActions.loadUserSuccess, (state, action) => {
    // console.log('action.user', action.user);
    return adapter.addOne(action.user, state);
    // return adapter.setAll([ action.user ], state)
  }),
  on(UsersPageActions.loadUserFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(UsersPageActions.UpdateUserSuccess, (state, { update }: any) =>
    adapter.updateOne(update, state)
  )

  // on(UsersPageActions.,
  //   (state, action) => adapter.upsertOne(action.usersPage, state)
  // ),
  // on(UsersPageActions.addUsersPages,
  //   (state, action) => adapter.addMany(action.usersPages, state)
  // ),
  // on(UsersPageActions.upsertUsersPages,
  //   (state, action) => adapter.upsertMany(action.usersPages, state)
  // ),
  // on(UsersPageActions.updateUsersPage,
  //   (state, action) => adapter.updateOne(action.usersPage, state)
  // ),
  // on(UsersPageActions.updateUsersPages,
  //   (state, action) => adapter.updateMany(action.usersPages, state)
  // ),
  // on(UsersPageActions.deleteUsersPage,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(UsersPageActions.deleteUsersPages,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),

  // on(UsersPageActions.clearUsersPages,
  //   state => adapter.removeAll(state)
  // ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
