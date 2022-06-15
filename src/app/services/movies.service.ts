import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMDB } from '../interfaces/interfacesMDB';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get<ResponseMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-05-15&primary_release_date.lte=2022-06-08&api_key=78107a6baf2a0cd7d67be49de78f4cd9&language=es&include_image_language=es`)

    // alt + 96 ``
  }
}
