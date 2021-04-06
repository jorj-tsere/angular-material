import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/core.module';
import { RouterModule } from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    CommonModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
