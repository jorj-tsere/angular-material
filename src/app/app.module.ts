import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { CoreModule } from '@core/core.module';
import { AppStoreModule } from '@store/app-store.module';
import { AppComponent } from './app.component';

// import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppStoreModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
