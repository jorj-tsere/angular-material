import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostStoreEffects } from './post.effects';
import * as fromPost from './post.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPost.PostFeatureKey, fromPost.reducer),
    EffectsModule.forFeature([PostStoreEffects])
  ]
})
export class PostStateModule { }
