import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './state/effects/auth.effects';
import { StoreModule } from '@ngrx/store';

import * as fromAuth from './state/reducers/auth.reducer';
import { SharedModule } from 'app/@shared/shared.module';
import { LoginFormComponent } from './components';

import { AuthPageComponent } from './containers';
import { AuthService } from './services';

@NgModule({
  declarations: [LoginFormComponent, AuthPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
