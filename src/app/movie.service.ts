import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'https://api.themoviedb.org/3'; // URL to web api

  private apiKey = 'api_key=735b3d18c2bc1830017e10f098cbe3ce';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
    }),
  };

  constructor(private http: HttpClient) {}

  /** GET configuration data needed for images from the server */
  getApiConfiguration(): Observable<any> {
    return this.apiCall(
      `${this.moviesUrl}/configuration?${this.apiKey}`,
      'fetched configuration api data',
      'getApiConfiguration'
    );
  }

  /** GET popular movies from the server */
  getPopularMovies(page: number): Observable<any> {
    return this.apiCall(
      `${this.moviesUrl}/movie/popular?${this.apiKey}&page=${page}`,
      'fetched popular movies',
      'getPopularMovies'
    );
  }
  /** GET popular movies from the server */
  getPopularTvSeries(): Observable<any> {
    return this.apiCall(
      `${this.moviesUrl}/tv/popular?${this.apiKey}`,
      'fetched popular tv series',
      'getPopularTvSeries'
    );
  }

  /** GET movie by id. Will 404 if id not found */
  getMovie(id: number): Observable<any> {
    return this.apiCall(
      `${this.moviesUrl}/movie/${id}?${this.apiKey}&append_to_response=videos,images,credits,recommendations`,
      `fetched movie id=${id}`,
      `getMovie id=${id}`
    );
  }

  /** GET movie by id. Will 404 if id not found */
  getTvSeries(id: number): Observable<any> {
    return this.apiCall(
      `${this.moviesUrl}/tv/${id}?${this.apiKey}&append_to_response=videos,images,credits,recommendations`,
      `fetched tv id=${id}`,
      `getTvSeries id=${id}`
    );
  }

  /** GET trending movies/tv series by day from the server */
  getTrendingDay(): Observable<any> {
    return this.apiCall(
      `${this.moviesUrl}/trending/all/day?${this.apiKey}`,
      'fetched trending movies by day',
      'getTrendingDay'
    );
  }

  /** GET trending movies/tv series by week from the server */
  getTrendingWeek(): Observable<any> {
    return this.apiCall(
      `${this.moviesUrl}/trending/all/week?${this.apiKey}`,
      'fetched trending movies by week',
      'getTrendingWeek'
    );
  }

  apiCall(
    apiUrl: string,
    errorMsg: string,
    methodName: string
  ): Observable<any> {
    return this.http.get<any>(apiUrl).pipe(
      tap((_) => console.log(errorMsg)),
      catchError(this.handleError<any>(methodName, []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
