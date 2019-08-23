import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieFilterPipe } from './filters/movie-filter.pipe';
import { FormsModule } from '@angular/forms';
import { YearFilterPipe } from './filters/year-filter.pipe';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [MoviesListComponent, MovieFilterPipe, YearFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ]
})
export class MovieModule { }
