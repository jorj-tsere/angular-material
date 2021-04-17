import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './containers';

// const routes: Routes = [
//   { path: 'login-form', component: LoginFormComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: '', pathMatch: 'full', redirectTo: 'login-form' },
// ];


const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
