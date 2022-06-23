import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesshowPosterComponent } from './slidesshow-poster/slidesshow-poster.component';
import { SlidesshowBackdropComponent } from './slidesshow-backdrop/slidesshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlidesshowPopularityComponent } from './slidesshow-popularity/slidesshow-popularity.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';



@NgModule({
  entryComponents: [
    DetailModalComponent
  ],
  declarations: [
    SlidesshowPosterComponent,
    SlidesshowBackdropComponent,
    SlidesshowPopularityComponent,
    DetailModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlidesshowPosterComponent,
    SlidesshowBackdropComponent,
    SlidesshowPopularityComponent,
    DetailModalComponent
  ]
})
export class ComponentsModule { }
