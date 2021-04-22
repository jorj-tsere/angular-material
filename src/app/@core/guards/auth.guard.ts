import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { routes } from '@core-constants';
import { LocalStorageService } from '@core-services';
import { AppState } from '@store-barrel';
import { Store } from '@ngrx/store';

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
    if (!user) {
      this.router.navigate([this.routers.LOGIN]);
      return false;
    }
    return true;
  }
}
