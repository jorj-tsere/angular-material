import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActivatedRoute, Router } from '@angular/router';
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

          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
          this.router.navigate([returnUrl]);
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
          this.router.navigate([routes.LOGIN]);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router, private route: ActivatedRoute) {}
}
