import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeCompoents } from './index';


@NgModule({
  declarations: [
    ...JokeCompoents
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...JokeCompoents
  ]
})
export class JokeModule { }
