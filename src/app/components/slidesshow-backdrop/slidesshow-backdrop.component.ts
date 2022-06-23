import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfacesMDB';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-slidesshow-backdrop',
  templateUrl: './slidesshow-backdrop.component.html',
  styleUrls: ['./slidesshow-backdrop.component.scss'],
})
export class SlidesshowBackdropComponent implements OnInit {

  @Input() recentMoviesChildren: Movie[];

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
