import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseMDB } from '../interfaces/interfacesMDB';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private httpClient: HttpClient) { }
  // https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-05-15&primary_release_date.lte=2022-06-08&api_key=78107a6baf2a0cd7d67be49de78f4cd9&language=es&include_image_language=es
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

    return this.httpClient.get<ResponseMDB>(`${URL}/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}&api_key=${apiKey}&language=es&include_image_language=es`)

    // alt + 96 ``
  }
}
