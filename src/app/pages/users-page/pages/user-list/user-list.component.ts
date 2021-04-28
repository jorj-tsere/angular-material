import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'app/store';
import * as fromUserPageActions from '@pages/users-page/state/actions/users-page.actions';
import * as fromUserPageSelectors from '@pages/users-page/state/selectors/users-page.selectors';
import { AuthService, LocalStorageService } from 'app/services';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public vm$: Observable<any>;
  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    public jwtHelper: JwtHelperService
  ) {
    this.vm$ = this.store.pipe(select(fromUserPageSelectors.selectAllUsers));
    this.store.dispatch(fromUserPageActions.loadUsers());

    console.log(this.jwtHelper.decodeToken(this.jwtHelper.tokenGetter())); // token
    // const accTok = mlToken.accessToken;
    // console.log('mlToken', mlToken, mlToken.accessToken)
  }

  ngOnInit(): void {}

  resetPassword() {

  }
}
