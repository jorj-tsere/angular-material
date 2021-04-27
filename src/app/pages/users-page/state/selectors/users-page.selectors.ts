import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '@pages/users-page/models';
import * as fromUsersPage from '@pages/users-page/state/reducers/users-page.reducer';


export const selectUsersPageState = createFeatureSelector<fromUsersPage.State>(
    fromUsersPage.usersPagesFeatureKey
);


export const selectAllUsers = createSelector(
    selectUsersPageState,
    fromUsersPage.selectAll
)


export const selectEntity = createSelector(
    selectUsersPageState,
    (entities: any, props: any) => entities[props.id]
);


export const entityExists = createSelector(
    selectAllUsers,
    (entities: any, props: any): boolean => {
        console.log('entities');
        return entities[props.id] !== undefined ? true : false;
    }
);

export const selectEntityById = createSelector(
    selectAllUsers,
    (entities: any, props: any): User => {
        return entities[props.id];
    }
);