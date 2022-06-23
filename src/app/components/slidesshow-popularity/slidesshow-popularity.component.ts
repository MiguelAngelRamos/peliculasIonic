import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfacesMDB';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-slidesshow-popularity',
  templateUrl: './slidesshow-popularity.component.html',
  styleUrls: ['./slidesshow-popularity.component.scss'],
})
export class SlidesshowPopularityComponent implements OnInit {

  @Input() moviePopularity: Movie[];
  @Output() cargarPopulares = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3
  }

  constructor( private modalController: ModalController ) { }

  ngOnInit() {
 
  }

  async getDetailModal(id: number) {
    const modal = await this.modalController.create({
      component: DetailModalComponent,
      componentProps: {
        id: id // es esto lo que recibe el input que vamos a crear en el DetailModalComponent
      }
    });
    modal.present();
  }

  onClick() {
    console.log('Boton para traer mas peliculas populares')
    this.cargarPopulares.emit();
  }

}
