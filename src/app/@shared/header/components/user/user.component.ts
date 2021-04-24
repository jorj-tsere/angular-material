import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '@store/actions';
import { routes } from 'app/consts';
import { IUser } from 'app/pages/auth/models';
import { AppState } from 'app/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: IUser;
  public routes: typeof routes = routes;

  public signOutEmit(): void {
    this.store.dispatch(logout());
  }
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
