import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { logout } from '@store/actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  removeUserFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          // try {
          //   this.localStorageService.removeItem('ml_token');
          // } catch (error) {
          //   console.error(error);
          // }
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
