import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/@shared/material/material.module';
import { SharedModule } from 'app/@shared/shared.module';
/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './guards';
import { AuthInterceptor, ErrorHandlerInterceptor } from './interceptors';

@NgModule({
  declarations: [],
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
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
