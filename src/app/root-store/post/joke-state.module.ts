import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { JokeStoreEffects } from './joke.effects';
import * as fromJoke from './joke.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromJoke.jokeFeatureKey, fromJoke.reducer),
    EffectsModule.forFeature([JokeStoreEffects])
  ]
})
export class JokeStateModule { }
