import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { routes } from 'app/consts';
import { IUser } from 'app/pages/auth/models';
import { AppState } from 'app/store';

import * as fromAuthActions from 'app/pages/auth/state/actions/auth.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: IUser;
  public routes: typeof routes = routes;

  public signOutEmit(): void {
    this.store.dispatch(fromAuthActions.Logout());
  }
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
