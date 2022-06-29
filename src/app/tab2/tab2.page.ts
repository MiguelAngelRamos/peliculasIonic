import { Component } from '@angular/core';
import { Movie } from '../interfaces/interfacesMDB';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public textSearch: string = '';

  public ideas: string[] = [
    'Spiderman',
    'Avengers',
    'El Señor de los Anillos',
    'Iron Man',
    'Toy Story'
  ];

  public movies: Movie[] = [];

  public spinner: boolean = false;

  constructor( private movieService: MoviesService ) {}

  public search(event) {
    // console.log(event.detail.value);
    const value: string = event.detail.value;

    if(value.length === 0) {
      this.spinner = false;
      this.movies = [];
      return; // para que no se siga ejecutando el código
    }

    this.spinner = true;
    console.log(value);

    this.movieService.searchMovies(value).subscribe( response => {
      console.log(response.results); // es un Arreglo
      this.movies = response.results;
      this.spinner = false;
    });

    
  }

}
