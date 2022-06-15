import { Pipe, PipeTransform } from '@angular/core';

const URL = 'https://image.tmdb.org/t/p';
@Pipe({
  name: 'image'
})
/**
 * *https://image.tmdb.org/t/p/w500/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg
 * *
 * * https://image.tmdb.org/t/p/w500 (LA BASE PARA CONSTRUIR LA URL)
 * * lo que nos devuelve al API : /wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg
 * */

export class ImagePipe implements PipeTransform {
  transform(img: string, size: string='w500'): string {
    
    if(!img) {
      return './assets/image-not-found.png';
    }
  
    const imageURL = `${URL}/${size}${img}`; //https://image.tmdb.org/t/p/w500/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg;
    // console.log('URL', imageURL);
    return imageURL;
  }

}
