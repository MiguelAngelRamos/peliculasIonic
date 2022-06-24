import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMovieDetails, IResponseCredits, ResponseMDB } from '../interfaces/interfacesMDB';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private httpClient: HttpClient) { }

  private contadorPage: number = 0;

  private runQuery<T>(query: string) {
    query =  URL + query;
    query = query + `&api_key=${apiKey}&language=es&include_image_language=es`;
    console.log(query);
    return this.httpClient.get<T>(query);
  }

  // Las peliculas por rango de fecha
  getMovies() {
    const diaHoy = new Date();
    // los meses en javascript comienzan desde 0 (ENERO SERIA EL MES 0)
    const ultimoDia = new Date(diaHoy.getFullYear(), diaHoy.getMonth() + 1, 0).getDate();
    const mes = diaHoy.getMonth() + 1;
    // * Enero 01
    
    let mesString;
    if(mes < 10 ) {
      // * 01, 02, 03, etc
      mesString = '0' + mes;
    } else {
      // 10, 11, 12
      mesString = mes;
    }
    // El inicio y el fin
    //* `${}`  dejar de usar + 
    
    const inicio = `${diaHoy.getFullYear()}-${mesString}-01`; // por que siempre queremos el primer dia del Mes
    const fin = `${diaHoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.runQuery<ResponseMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`)
    // alt + 96 ``
  }

  // Las peliculas Populares

  getPopulares() {
   // this.contadorPage = this.contadorPage + 1;
   this.contadorPage++;
    const query = `/discover/movie?sort_by=popularity&page=${this.contadorPage}`; // asc
    return this.runQuery<ResponseMDB>(query);
  }

  getMovieDetail(id: number) {
    return this.runQuery<IMovieDetails>(`/movie/${id}?a=1`);
  }


  // /movie/{movie_id}/credits
  getActorsMovie(id: number) {
    return this.runQuery<IResponseCredits>(`/movie/${id}/credits?a=1`);
  }
}
