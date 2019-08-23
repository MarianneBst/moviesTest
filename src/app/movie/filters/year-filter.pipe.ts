import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie.interface';

@Pipe({
  name: 'yearFilter'
})
export class YearFilterPipe implements PipeTransform {

  transform(value: Movie[], selectedYear: string = ''): any {
    if (selectedYear !== '' && selectedYear !== 'Select a year') {
      const result = value.filter((movie: Movie) => movie.startYear.includes(selectedYear));
      return result;
    } else {
      return value;
    }
  }

}
