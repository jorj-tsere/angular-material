import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromUsersPageSelectors from '../../../../store/selectors/users-page.selectors';
import * as fromUsersPageActions from '../../../../store/actions/users-page.actions';
import { AppState } from 'app/store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public vm$: Observable<any>;
  constructor(private store: Store<AppState>) {
    this.vm$ = this.store.pipe(
      select(fromUsersPageSelectors.selectUsersPageViewModel)
    );
    this.store.dispatch(fromUsersPageActions.loadUsersPage());
  }

  ngOnInit(): void {}
}
