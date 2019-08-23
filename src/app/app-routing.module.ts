import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movie/movies-list/movies-list.component';


const routes: Routes = [
  // {path: "movies", component: MovieListComponent},
  {path: "", component: MoviesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
