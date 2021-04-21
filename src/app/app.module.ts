import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '@env';
import { CustomerSupportEffects } from '@store/effects/customer-support.effects';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { CoreModule } from '@core/core.module';
import { reducers, metaReducers } from '@store-barrel';
import {
  SpinnerEffects,
  AlertEffects,
  RouteEffects,
  AppEffects,
} from '@store/effects';
// import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
