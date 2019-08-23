import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.interface';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public movies: Movie[];
  public searchTerm: string;
  public startYearList: string[];
  public genreList: string[];
  public genreList2: string[];
  public selectedYear: string;
  public editedMovie: Movie;
  public selectedGenres = [];

  constructor(public _moviesService: MovieService) {}

  ngOnInit() {
    this.searchTerm = '';
    this.startYearList = [];
    this.genreList = [];
    this.genreList2 = [];
    this.selectedYear = '';
    this.editedMovie = null;

    // get all the movies
    this._moviesService.getMovies().subscribe(data => {
      this.movies = data;

      // array with only startYear
      this.startYearList = this.movies.map( movie => movie.startYear);
      // delete duplicate
      this.startYearList = this.startYearList.filter((year, index, list) => index === list.indexOf(year));
      
      // array with only genre
      this.genreList = this.movies.map( movie => movie.genres);
      // split couple of genre
      this.genreList.map( genres => {
        const tmp = genres.split(',');
        tmp.forEach(element => {
          this.genreList2.push(element);
        });
      });
      // delete duplicate
      this.genreList = this.genreList2.filter((genre, index, list) => index === list.indexOf(genre));
    }, err => console.error(err));
  }

  filterDate(year) {
    this.selectedYear = year;
  }

  editMovie(selectedMovie) {
    this.editedMovie = selectedMovie;
    this.selectedGenres = selectedMovie.genres.split(',');
  }

  updateMovie(form: NgForm) {

    // if input modified
    if (form.value.originalTitle !== '') {
      this.editedMovie.originalTitle = form.value.originalTitle;
      this.editedMovie.primaryTitle
       = form.value.originalTitle;
    }
    if (form.value.startYear !== '') {
      this.editedMovie.startYear = form.value.startYear;
    }

    let genresSelected = '';
    
    if (form.value.tags !== []) {
      this.selectedGenres.forEach(genre => {
        if (genresSelected !== '') {
          genresSelected += ',';
        }
        genresSelected += genre;
      });
    }
    this.editedMovie.genres = genresSelected;

}

}
