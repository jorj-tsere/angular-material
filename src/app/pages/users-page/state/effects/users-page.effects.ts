import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { AdminUser } from '@pages/users-page/models';
import { GetAdminUserDetailsResponse } from '@pages/users-page/models/get-admin-user-details-response';
import { UpdateAdminUserRequest } from '@pages/users-page/models/update-admin-user-request';
import { UsersService } from 'app/services';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import {
  registerFailure,
  registerPage,
  registerSuccess,
} from '../actions/register.actions';
import * as fromUsersPage from '../actions/users-page.actions';

@Injectable()
export class UsersPageEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsersPage.loadUsers),
      mergeMap(() =>
        this.userService.getUserList().pipe(
          map((response) =>
            fromUsersPage.loadUsersSuccess({ users: response.adminUserList })
          ),
          catchError((error: Error) =>
            of(fromUsersPage.loadUsersFailure({ error }))
          )
        )
      )
    );
  });

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsersPage.loadUser),
      mergeMap((action) =>
        this.userService.getUserDetails(action.id).pipe(
          map((response: GetAdminUserDetailsResponse) =>
            fromUsersPage.loadUserSuccess({ user: response.userDetail })
          ),
          catchError((error: Error) =>
            of(fromUsersPage.loadUserFailure({ error }))
          )
        )
      )
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsersPage.UpdateUser),
      mergeMap((action) => {
        return this.userService
          .updateUserDetails({
            id: action.user.id,
            ...action.user.changes,
          })
          .pipe(
            map((response) => {
              const update: Update<UpdateAdminUserRequest> = {
                id: +action.user.id,
                changes: action.user.changes,
              };
              return fromUsersPage.UpdateUserSuccess({ update });
            }),
            catchError((error: any) =>
              of(fromUsersPage.UpdateUserFailure({ error }))
            )
          );
      })
    );
  });

  registerUSer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerPage),
      mergeMap((action) =>
        this.userService.createAdminUser(action.registerRequestPayload).pipe(
          map((response) => registerSuccess({ registerResponse: response })),
          catchError((error: Error) => of(registerFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UsersService) {}
}
