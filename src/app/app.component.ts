import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from './pages/auth/models';
import { BrowserReload } from './pages/auth/state/actions/auth.actions';
import { AppState } from './store';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const user: IUser = JSON.parse(localStorage.getItem('user'));
    this.store.dispatch(BrowserReload({ user }));
  }
  constructor(private store: Store<AppState>) {}
}
