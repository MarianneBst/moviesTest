import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie.interface';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(value: Movie[], searchTerm: string = ''): any {
    if(searchTerm !== ''){
      let result = value.filter(
        (movie: Movie) =>
          movie.primaryTitle.toLowerCase().includes(searchTerm) ||
          movie.originalTitle.toLowerCase().includes(searchTerm)
      );
      return result;
    }else{
        return value;
    }
  }

}
