import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from './pages/auth/models';
import { BrowserReload } from './pages/auth/state/actions/auth.actions';
import { LocalStorageService } from './services';
import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const user: IUser = this.localStorageService.getObject('ml_token') as any;
    this.store.dispatch(BrowserReload({ user }));
  }
  constructor(
    private store: Store<AppState>,
    private localStorageService: LocalStorageService
  ) {}
}
