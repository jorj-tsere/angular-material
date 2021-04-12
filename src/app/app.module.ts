import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/core.module';
import { RootStoreModule } from './root-store';


// import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    RootStoreModule
    // RootStoreModule // must be imported as the last module as it contains the fallback route
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
