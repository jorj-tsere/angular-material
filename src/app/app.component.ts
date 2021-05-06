import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUser } from '@auth-module-models-barrel';
import { LocalStorageService } from 'app/services';
import { Store } from '@ngrx/store';
import { AppState } from '@store-barrel';
import { browserReload } from '@store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const user: IUser = this.localStorageService.readToken();
    if (user) {
      this.store.dispatch(browserReload({ loggedUser: user }));
    }
  }
  constructor(
    private store: Store<AppState>,
    private localStorageService: LocalStorageService
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    // tslint:disable-next-line:no-string-literal
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animation
    );
  }
}
