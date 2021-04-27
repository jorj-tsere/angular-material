import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '@store-barrel';
import { entityExists, selectEntity, selectEntityById } from '@pages/users-page/state/selectors/users-page.selectors';
import { ActivatedRoute } from '@angular/router';
import { User } from '@pages/users-page/models';
import { concatMap, mergeMap } from 'rxjs/operators';
import { loadAdminRoles } from '@store/actions/lookup.actions';
import { selectAdminRoles, selectLookupViewModel } from '@store/selectors/lookup.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mailValidator } from '@shared/helpers';
import { AdminRole } from '@pages/users-page/components';
import { loadUser } from '@pages/users-page/state/actions/users-page.actions';

@Component({
  selector: 'app-use-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  public form: FormGroup;

  user$: Observable<User>;
  userId: string;
  isUserInStore$: Observable<boolean>;
  adminRoles$: Observable<AdminRole[]>;


  constructor(private fb: FormBuilder, private location: Location, private store: Store<AppState>, private route: ActivatedRoute) {
    this.form = this.fb.group({
      username: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      roleID: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      email: [null, [Validators.required, mailValidator]],
    });
  }

  navigate_back() {
    this.location.back();
  }

  update() {
    console.log('update');
  }



  ngOnInit(): void {

    this.store.dispatch(loadAdminRoles());
    this.adminRoles$ = this.store.pipe(select(selectAdminRoles));

    this.userId = this.route.snapshot.paramMap.get('id');

    console.log('userId', this.userId);

    this.isUserInStore$ = this.store.pipe(
      select(entityExists, { id: this.userId })
    )



    this.user$ = this.isUserInStore$.pipe(
      mergeMap((isProductInStore) => {
        console.log('isProductInStore', isProductInStore);
        if (!isProductInStore) {
          this.store.dispatch(loadUser({ id: +this.userId }))
        }

        return this.store.pipe(
          select(selectEntityById, {
            id: this.userId
          })
        )
      })
    )

  }
}
