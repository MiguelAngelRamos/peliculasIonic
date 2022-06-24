import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovieDetails } from '../../interfaces/interfacesMDB';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {

  @Input() id: number;
  public movie: IMovieDetails;
  constructor(private movieService: MoviesService ) { }

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
                      console.log(response);
                    })
  }

}
