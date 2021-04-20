import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './@core/guards';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [

  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/users-page/users-page.module').then(
        (m) => m.UsersPageModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },

];

/*
 {
    path: '**',
    redirectTo: '404',
  },
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
