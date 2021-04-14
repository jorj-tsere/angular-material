import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCompoents } from './index';
import { SharedModule } from 'app/@shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    ...JokeCompoents
  ],
  imports: [
    SharedModule,
    MatCardModule,
    MatProgressBarModule,
    CommonModule,
  ],
  exports: [
    ...JokeCompoents
  ]
})
export class JokeModule { }
