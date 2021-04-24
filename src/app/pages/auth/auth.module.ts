import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from 'app/@shared/shared.module';
import { LoginFormComponent } from './components';

import { AuthPageComponent } from './containers';

@NgModule({
  declarations: [LoginFormComponent, AuthPageComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  providers: [],
})
export class AuthModule {}
