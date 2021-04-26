import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { SharedModule } from 'app/@shared/shared.module';
import { EmployeeTableComponent, MaterialTableComponent } from './components';
import { UserDetailsComponent } from './pages';
import { UserListComponent } from './pages/user-list/user-list.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { StoreModule } from '@ngrx/store';
import * as fromUsersPage from './state/reducers/users-page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersPageEffects } from './state/effects/users-page.effects';


@NgModule({
  declarations: [
    UsersPageComponent,
    EmployeeTableComponent,
    MaterialTableComponent,
    UserDetailsComponent,
    UserListComponent,
    RegisterUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersPageRoutingModule,
    StoreModule.forFeature(fromUsersPage.usersPagesFeatureKey, fromUsersPage.reducer),
    EffectsModule.forFeature([UsersPageEffects]),

  ],
})
export class UsersPageModule {}
