import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IMovieDetails } from '../interfaces/interfacesMDB';

@Injectable({
  providedIn: 'root'
})
export class LocalDbService {
  
  private _storage: Storage | null = null;
  public movies: IMovieDetails[] = []; // dentro de este arreglo se van ir guardado las peliculas favoritas

  //* matrix(IMovieDeatails), toystore (IMovieDeatails)

  constructor(private storage: Storage, private toastController: ToastController) {
    this.initDB();
  }

  async presentToast(message: string ) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async initDB() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Para guardar en el base de datos (storage)
  // * Estoy agregando matrix(IMovieDeatails)
  saveMovie( movieDetails: IMovieDetails) {
    let existsMovie = false; // la pelicula no existe
    let message = '';

    for(const movie of this.movies) {
      if(movie.id == movieDetails.id ) {
        existsMovie = true;
        break;
      }
    }
    if(existsMovie) {
  
      this.movies = this.movies.filter( movieElement => movieElement.id !== movieDetails.id);
      message = 'Eliminado de favoritos'
      console.log(this.movies);
    } else {
      this.movies.push(movieDetails);
      message = 'Agregando a favoritos'
    }
    this.presentToast(message);
    this.storage.set('movies', this.movies);

    // va retornar un booleano
    return !existsMovie;
  }

  // cargar Favoritos

  async loadFavorites() {
    const moviesDb = await this.storage.get('movies');
    this.movies = moviesDb || []; // si es null que retorne un arreglo vacio
    return this.movies;
  }


}
