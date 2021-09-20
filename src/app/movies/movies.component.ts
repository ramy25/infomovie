import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  page: number = 1;
  totalPages: number = 0;
  throttle: number = 300;
  scrollDistance: number = 1;
  direction: string = 'down';
  apiConfiguration: any;
  posterImage?: string;

  constructor(private moviesService: MovieService) {}

  ngOnInit(): void {
    this.getPopularMovies(this.page);
    this.getApiConfiguration();
  }

  getPopularMovies(page: number): void {
    this.moviesService.getPopularMovies(page).subscribe((movies) => {
      this.totalPages = movies.total_pages;
      this.movies = [
        ...this.movies,
        movies.results.map((movie: any) => ({
          ...movie,
          media_type: 'movie',
        })),
      ];
      console.log(this.movies);
    });
  }

  getApiConfiguration(): void {
    this.moviesService.getApiConfiguration().subscribe((config) => {
      this.apiConfiguration = config;
      const baseUrl = this.apiConfiguration.images.base_url;
      this.posterImage =
        baseUrl +
        this.apiConfiguration.images.poster_sizes.find(
          (size: string) => size === 'w185'
        );
    });
  }

  onScrollDown() {
    console.log('scrolled down!!');

    // add another 20 items
    if (this.totalPages > this.page) {
      this.page++;
      this.getPopularMovies(this.page);
    }
  }
}
