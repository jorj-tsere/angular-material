import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from 'app/services';
import { of } from 'rxjs';
import { concatMap, map, catchError, mergeMap } from 'rxjs/operators';
import * as fromUserDetailsPage from '../actions/user-details.actions';
import * as fromUsersPage from '../actions/users-page.actions';



@Injectable()
export class UsersPageEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsersPage.loadUsers),
      mergeMap(() =>
        this.userService.getUserList().pipe(
          map((users) => fromUsersPage.loadUsersSuccess({ users })),
          catchError((error: Error) => of(fromUsersPage.loadUsersFailure({ error })))
        )
      )
    );
  });

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsersPage.loadUser),
      mergeMap((action) =>
        this.userService.getUserDetails(action.id).pipe(
          map((user) => fromUsersPage.loadUserSuccess({ user })),
          catchError((error: Error) => of(fromUsersPage.loadUserFailure({ error })))
        )
      )
    );
  });




  constructor(private actions$: Actions, private userService: UsersService) { }

}
