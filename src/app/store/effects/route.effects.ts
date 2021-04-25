import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { routes } from 'app/consts';
import { loginSuccess, logout } from '@store/actions/auth.actions';

@Injectable()
export class RouteEffects {
  public routes: typeof routes = routes;

  goToAdminDashboard$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          console.warn(
            '[[ navigation from route effects]] to:',
            routes.USERS_LIST
          );
          this.route.navigate([routes.USERS_LIST]);
        })
      ),
    { dispatch: false }
  );

  goToLoginPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          console.warn('[[ navigation from route effects]] to:', routes.LOGIN);
          this.route.navigate([routes.LOGIN]);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private route: Router) {}
}
