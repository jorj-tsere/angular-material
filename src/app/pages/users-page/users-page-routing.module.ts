import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './containers';
import { UserDetailsComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent
  },
  {
    path: 'edit/:user_id',
    pathMatch: 'full',
    component: UserDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersPageRoutingModule { }
