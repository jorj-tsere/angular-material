import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './state/effects/auth.effects';
import { RegisterEffects } from './state/effects/register.effects';
import { StoreModule } from '@ngrx/store';

import * as fromAuth from './state/reducers/auth.reducer';
import * as fromRegister from './state/reducers/register.reducer';
import { SharedModule } from 'app/@shared/shared.module';
import { LoginFormComponent, RegisterFormComponent } from './components';

import { AuthPageComponent } from './containers';
import { AuthService } from './services';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, AuthPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    StoreModule.forFeature(
      fromRegister.RegisterFeatureKey,
      fromRegister.reducer
    ),
    EffectsModule.forFeature([AuthEffects, RegisterEffects]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
