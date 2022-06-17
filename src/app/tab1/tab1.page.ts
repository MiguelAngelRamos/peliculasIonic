import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/interfacesMDB';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  recentMovies: Movie[] = [];
  popularity: Movie[] = []; // la informacion que pasaremos al hijo
  constructor( private movieService: MoviesService) {}

  ngOnInit(): void {

    this.movieService.getMovies().subscribe(response => {
      console.log(response.results);
      this.recentMovies = response.results;
    });

    this.movieService.getPopulares().subscribe( response => {
      console.log('Movies Popularity', response.results);
      this.popularity = response.results;
    })
  }

}
