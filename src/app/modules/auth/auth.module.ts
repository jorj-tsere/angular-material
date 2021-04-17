import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
