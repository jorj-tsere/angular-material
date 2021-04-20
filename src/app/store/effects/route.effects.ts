import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import * as fromAuthActions from 'app/pages/auth/state/actions/auth.actions';
import { tap } from 'rxjs/operators';
import { routes } from 'app/consts';

@Injectable()
export class RouteEffects {
  public routes: typeof routes = routes;

  goToAdminDashboard$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.LoginSuccess),
        tap(() => {
          console.warn(
            '[[ navigation from route effects]] to:',
            routes.USERS
          );
          this.route.navigate([routes.USERS]);
        })
      ),
    { dispatch: false }
  );

  goToLoginPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.Logout),
        tap(() => {
          console.warn(
            '[[ navigation from route effects]] to:',
            routes.LOGIN
          );
          this.route.navigate([routes.LOGIN])
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private route: Router) {
  }
}
