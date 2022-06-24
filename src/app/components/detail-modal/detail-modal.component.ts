import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ICast, IMovieDetails } from '../../interfaces/interfacesMDB';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {

  @Input() id: number;
  movie: IMovieDetails;
  actors: ICast[] = [];
  leerMas: number= 150;
  slideOptActors = {
    slidesPerView: 3.3,
    freeMode: true
  }
  
  constructor( private movieService: MoviesService, private modalCtrl: ModalController ) { }

  ngOnInit() {
    // console.log('El id es: ', this.id);
    //* Detalle de la película
    this.movieService.getMovieDetail(this.id)
                     .subscribe(response => {
                      console.log(response);
                      this.movie = response;
                     });

   //* Los actores
   this.movieService.getActorsMovie(this.id)
                    .subscribe(response => {
                      console.log(response.cast);
                      this.actors = response.cast;
                    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

}
