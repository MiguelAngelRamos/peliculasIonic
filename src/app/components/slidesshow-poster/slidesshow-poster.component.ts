import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfacesMDB';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import { IMovieDetails } from '../../interfaces/interfacesMDB';

@Component({
  selector: 'app-slidesshow-poster',
  templateUrl: './slidesshow-poster.component.html',
  styleUrls: ['./slidesshow-poster.component.scss'],
})
export class SlidesshowPosterComponent implements OnInit {

  @Input() moviesPosters: IMovieDetails[];

  slideOpts = {
    slidesPerView:3.2,
  }
  constructor( private modalController: ModalController) { }

  ngOnInit() {}

  async getDetailModal(id: number) {
    const modal = await this.modalController.create({
      component: DetailModalComponent,
      componentProps: {
        id: id // es esto lo que recibe el input que vamos a crear en el DetailModalComponent
      }
    });
    modal.present();
  }

}
