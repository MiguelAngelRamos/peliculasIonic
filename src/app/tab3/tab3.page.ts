import { Component, OnInit } from '@angular/core';
import { LocalDbService } from '../services/local-db.service';
import { IMovieDetails } from '../interfaces/interfacesMDB';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  
  movies: IMovieDetails[] = [];
  constructor( private localDbService: LocalDbService ) {}

  async ngOnInit() {
    try {
      this.movies = await this.localDbService.loadFavorites();
      console.log(this.movies);
    } catch (error) {
      console.log(error);
    }

  }



}
