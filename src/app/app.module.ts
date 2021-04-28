import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { CoreModule } from '@core/core.module';
import { AppStoreModule } from '@store/app-store.module';
import { AppComponent } from './app.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { JwtModule } from '@auth0/angular-jwt';
// import { TranslateModule } from '@ngx-translate/core';



const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};



@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppStoreModule,
    NotifierModule.withConfig(customNotifierOptions),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
            return JSON.parse((localStorage.getItem('ml_token')) as any).accessToken;
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
