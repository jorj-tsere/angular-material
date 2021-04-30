import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { routes } from '@core-constants';
import { LocalStorageService } from 'app/services';
import { AppState } from '@store-barrel';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user = this.localStorageService.getObject('ml_token');
    if (!user) {
      this.router.navigate([this.routers.LOGIN],{ queryParams: { returnUrl: state.url } });
      return false;
    }
    return true;
  }
}
