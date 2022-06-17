import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesshowPosterComponent } from './slidesshow-poster/slidesshow-poster.component';
import { SlidesshowBackdropComponent } from './slidesshow-backdrop/slidesshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlidesshowPopularityComponent } from './slidesshow-popularity/slidesshow-popularity.component';



@NgModule({
  declarations: [
    SlidesshowPosterComponent,
    SlidesshowBackdropComponent,
    SlidesshowPopularityComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlidesshowPosterComponent,
    SlidesshowBackdropComponent,
    SlidesshowPopularityComponent
  ]
})
export class ComponentsModule { }
