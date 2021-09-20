import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit {
  movies: any;
  tvs: any;
  apiConfiguration: any;
  posterImage?: string;
  showMovieOrTv: boolean = true;

  constructor(private moviesService: MovieService) {}

  ngOnInit() {
    this.getPopularMovies(1);
    this.getPopularTvSeries();
    this.getApiConfiguration();
  }

  getPopularMovies(page: number): void {
    this.moviesService.getPopularMovies(page).subscribe((movies) => {
      this.movies = movies.results;
      this.movies = this.movies.map((movie: any) => ({
        ...movie,
        media_type: 'movie',
      }));
    });
  }

  getPopularTvSeries(): void {
    this.moviesService.getPopularTvSeries().subscribe((tvs) => {
      this.tvs = tvs.results;
      this.tvs = this.tvs.map((tv: any) => ({
        ...tv,
        media_type: 'tv',
      }));
    });
  }

  getApiConfiguration(): void {
    this.moviesService.getApiConfiguration().subscribe((config) => {
      this.apiConfiguration = config;
      this.posterImage =
        this.apiConfiguration.images.base_url +
        this.apiConfiguration.images.poster_sizes.find(
          (size: string) => size === 'w185'
        );
    });
  }
}
