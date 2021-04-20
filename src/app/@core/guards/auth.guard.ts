import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { routes } from '../../consts';

@Injectable()
export class AuthGuard implements CanActivate {
  public routers: typeof routes = routes;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = localStorage.getItem('ml_token');
    // , state: RouterStateSnapshot
    if (!user) {
      this.router.navigate([this.routers.LOGIN]);
      /*
      , {
        queryParams: { redirect: state.url },
        replaceUrl: true,
      }
      */
      return false;
    }
    return true;
  }
}
