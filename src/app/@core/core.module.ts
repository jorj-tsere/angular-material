import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/@shared/material/material.module';
import { SharedModule } from 'app/@shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    SharedModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    /*
     The @SkipSelf annotation ensures that a parent module of the module consuming CoreModule
     gets injected by Angular DI into the constructor of the CoreModule while
     the @Optional annotation silences errors and forces the Angular DI to provide null in case that module is not available
    */
    if (core) {
      throw new Error(`${core.constructor.name} has already been loaded.`);
    }
  }
}
