import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesshowPosterComponent } from './slidesshow-poster/slidesshow-poster.component';
import { SlidesshowBackdropComponent } from './slidesshow-backdrop/slidesshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    SlidesshowPosterComponent,
    SlidesshowBackdropComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlidesshowPosterComponent,
    SlidesshowBackdropComponent
  ]
})
export class ComponentsModule { }
