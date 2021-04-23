import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './containers';
import { UserDetailsComponent, UserListComponent } from './pages';
import { RegisterUserComponent } from './pages/register-user/register-user.component';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: UserListComponent,
        data: { animation: 'UserList' }
      },
      {
        path: 'edit/:user_id',
        component: UserDetailsComponent,
        data: { animation: 'UserDetails' }
      },
      {
        path: 'register',
        component: RegisterUserComponent,
        data: { animation: 'registerPage' }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
