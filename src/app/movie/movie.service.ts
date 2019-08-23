import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Movie } from "./movie.interface";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private _url: string = '/assets/data/db.json';

    constructor(private _http: HttpClient) {
    }

    getMovies(): Observable<Movie[]> {
        return this._http.get<Movie[]>(this._url).pipe(
            catchError(err => throwError(err || 'Error'))
        );
    }
}