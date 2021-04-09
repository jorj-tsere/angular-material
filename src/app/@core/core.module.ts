import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';



import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/@shared/material/material.module';
import { SharedModule } from 'app/@shared/shared.module';
import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { TestComponent } from 'app/test/test.component';
import { JokeCardItemComponent } from 'app/components/joke-card-item/joke-card-item.component';
import { JokeCardListComponent } from 'app/components/joke-card-list/joke-card-list.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TestComponent,
    JokeCardItemComponent,
    JokeCardListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    SharedModule,
    HttpClientModule,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    MaterialModule,
    RouterModule,
    JokeCardItemComponent,
    JokeCardListComponent
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
