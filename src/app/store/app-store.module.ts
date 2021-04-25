import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  SpinnerEffects,
  AlertEffects,
  RouteEffects,
  AppEffects,
  AuthEffects,
  RegisterEffects,
  LookupEffects,
} from '@store/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '@store/custom-route-serializer';

import * as fromAuth from '@store/reducers/auth.reducer';
import * as fromUsers from '@store/reducers/users-page.reducer';
import * as fromRegister from '@store/reducers/register.reducer';
import { UsersPageEffects } from '@store/effects/users-page.effects';

import { EffectsModule } from '@ngrx/effects';
import { environment } from '@env';
import { CustomerSupportEffects } from '@store/effects/customer-support.effects';
import * as fromLookup from '@store/reducers/lookup.reducer';
import { reducers, metaReducers } from '@store-barrel';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionTypeUniqueness: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      CustomerSupportEffects,
      SpinnerEffects,
      AlertEffects,
      RouteEffects,
      AppEffects,
    ]),
    StoreModule.forFeature(fromLookup.lookupFeatureKey, fromLookup.reducer),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([
      LookupEffects,
      AuthEffects,
      UsersPageEffects,
      RegisterEffects,
    ]),
    StoreModule.forFeature(fromUsers.usersPageFeatureKey, fromUsers.reducer),
    StoreModule.forFeature(fromRegister.RegisterFeatureKey, fromUsers.reducer),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
})
export class AppStoreModule {}
