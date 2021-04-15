import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostStateModule } from './post';
import { JokeStateModule } from './joke';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostStateModule,
    JokeStateModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ]
})
export class RootStoreModule { }
