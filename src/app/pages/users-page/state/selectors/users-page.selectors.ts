import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminUser } from '@pages/users-page/models';
import * as fromUsersPage from '@pages/users-page/state/reducers/users-page.reducer';

export const selectUsersPageState = createFeatureSelector<fromUsersPage.UsersState>(
  fromUsersPage.usersPagesFeatureKey
);

export const selectAllUsers = createSelector(
  selectUsersPageState,
  fromUsersPage.selectAll
);

export const selectAllEntities = createSelector(
  selectUsersPageState,
  fromUsersPage.selectEntities
);

export const selectEntity = createSelector(
  selectAllEntities,
  (entities: any, props: any) => entities[props.id]
);

export const entityExists = createSelector(
  selectAllEntities,
  (entities: any, props: any): boolean => {
    return entities[props.id] !== undefined ? true : false;
  }
);

export const selectEntityById = createSelector(
  selectAllEntities,
  (entities: any, props: any): AdminUser => {
    console.log('props', props, 'then', entities, entities[props.id]);
    return entities[props.id];
  }
);
