import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './containers';
import { UserDetailsComponent, UserListComponent } from './pages';

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
        component: UserListComponent
      },
      {
        path: 'edit/:user_id',
        component: UserDetailsComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
