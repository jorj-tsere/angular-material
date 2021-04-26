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
  LookupEffects,
} from '@store/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '@store/custom-route-serializer';

import * as fromAuth from '@store/reducers/auth.reducer';

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
    ]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
})
export class AppStoreModule {}
