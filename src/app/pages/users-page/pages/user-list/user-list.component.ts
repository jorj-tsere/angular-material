import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'app/store';
import * as fromUserPageActions  from '@pages/users-page/state/actions/users-page.actions';
import * as fromUserPageSelectors  from '@pages/users-page/state/selectors/users-page.selectors';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public vm$: Observable<any>;
  constructor(private store: Store<AppState>) {
    this.vm$ = this.store.pipe(
      select(fromUserPageSelectors.selectAllUsers)
    );
    this.store.dispatch(fromUserPageActions.loadUsers());
  }

  ngOnInit(): void {}
}
