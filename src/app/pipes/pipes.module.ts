import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PopularPipe } from './popular.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    PopularPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePipe,
    PopularPipe
  ]
})
export class PipesModule { }
