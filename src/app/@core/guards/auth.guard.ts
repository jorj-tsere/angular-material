import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { routes } from '../../consts';
import { LocalStorageService } from 'app/services';

@Injectable()
export class AuthGuard implements CanActivate {
  public routers: typeof routes = routes;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = this.localStorageService.getObject('ml_token');
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
