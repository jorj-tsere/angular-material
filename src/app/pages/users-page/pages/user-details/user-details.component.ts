import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '@store-barrel';
import {
  entityExists,
  selectEntity,
  selectEntityById,
} from '@pages/users-page/state/selectors/users-page.selectors';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { loadAdminRoles } from '@store/actions/lookup.actions';
import {
  isAdminRolesExists,
  selectAdminRoles,
  selectLookupViewModel,
} from '@store/selectors/lookup.selectors';
import {
  loadUser,
  UpdateUser,
} from '@pages/users-page/state/actions/users-page.actions';
import { AdminUser } from '@pages/users-page/models';
import { UpdateAdminUserRequest } from '@pages/users-page/models/update-admin-user-request';
import { Update } from '@ngrx/entity';
import { UpdateStr } from '@ngrx/entity/src/models';

@Component({
  selector: 'app-use-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<AdminUser>;
  userId: string;
  isUserInStore$: Observable<boolean>;
  adminRoles$: Observable<any[]>;
  isAdminRolesExists$: Observable<boolean>;

  constructor(
    private location: Location,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  navigate_back() {
    this.location.back();
  }

  submitUpdateAdminUserForm(user: UpdateAdminUserRequest) {
    const editUser: Update<UpdateAdminUserRequest> = {
      id: user.id,
      changes: user,
    };
    this.store.dispatch(UpdateUser({ user: editUser }));
  }

  ngOnInit(): void {
    this.isAdminRolesExists$ = this.store.pipe(select(isAdminRolesExists));
    this.adminRoles$ = this.isAdminRolesExists$.pipe(
      mergeMap((isListInSotre) => {
        if (!isListInSotre) {
          this.store.dispatch(loadAdminRoles());
        }
        return this.store.pipe(select(selectAdminRoles));
      })
    );

    this.userId = this.route.snapshot.paramMap.get('id');

    // console.log('userId', this.userId);

    this.isUserInStore$ = this.store.pipe(
      select(entityExists, { id: this.userId })
    );

    this.user$ = this.isUserInStore$.pipe(
      mergeMap((isProductInStore) => {
        console.log('isProductInStore', isProductInStore);
        if (!isProductInStore) {
          this.store.dispatch(loadUser({ id: +this.userId }));
        }

        return this.store.pipe(
          select(selectEntity, {
            id: this.userId,
          })
        );
      })
    );
  }
}
