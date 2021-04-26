import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Users } from '../../models/users-page.model';
import * as UsersPageActions from '../actions/users-page.actions';

export const usersPagesFeatureKey = 'usersPages';

export interface State extends EntityState<Users> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Users> = createEntityAdapter<Users>();

export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
  loading: null,
  error: null
});


export const reducer = createReducer(
  initialState,
  on(UsersPageActions.loadUsersSuccess,
    (state, action) => adapter.setAll(action.users, state)
  ),
  on(UsersPageActions.loadUsersFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),

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
