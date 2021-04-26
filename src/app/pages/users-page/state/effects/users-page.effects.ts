import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from 'app/services';
import { of } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
import * as fromUsersPage  from '../actions/users-page.actions';



@Injectable()
export class UsersPageEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUsersPage.loadUsers),
      concatMap(() =>
        this.userService.getUserList().pipe(
          map((users) => {
            console.log(users);
            if(!users || typeof users !== 'object'){
               throw new Error('sadasd');
            }
            return fromUsersPage.loadUsersSuccess({ users })
          }),
          catchError((error: Error) =>
            of(fromUsersPage.loadUsersFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UsersService) {}

}
