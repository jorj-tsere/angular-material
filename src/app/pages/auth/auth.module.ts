import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';
import { StoreModule } from '@ngrx/store';

import * as fromAuth from './state/reducers/auth.reducer';
import { SharedModule } from 'app/@shared/shared.module';
import { RegisterComponent, LoginFormComponent } from './components';

import { YearPipe } from './pipes';
import { AuthGuard } from './guards';
import { AuthService } from './services/auth.service';
import { EmailService } from './services/email.service';
import { AuthPageComponent } from './containers';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterComponent,
    AuthPageComponent,
    YearPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthService, EmailService, AuthGuard],
})
export class AuthModule {}
