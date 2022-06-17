import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popular'
})
export class PopularPipe implements PipeTransform {

  transform(arr: any[]): any[] {

   const arrayPares = arr.reduce((result, value, index, array) => {
      if( index % 2 === 0) {
        result.push(array.slice(index, index+2));
      }
    return result;
   }, []);

   console.log(arrayPares);
   return arrayPares;

  }

}
