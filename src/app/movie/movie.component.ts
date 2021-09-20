import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: any;
  apiConfiguration: any;
  posterImage?: string;
  backdrop?: string;
  castImage?: string;
  recommendationsImage?: string;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MovieService
  ) {}

  ngOnInit(): void {
    this.getApiConfiguration();
    this.route.params.subscribe((routeParams) => {
      this.getMovie(routeParams.id);
    });
  }

  getMovie(id: number | null): void {
    id = !id ? +this.route.snapshot.paramMap.get('id')! : id;
    this.moviesService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
      console.log(movie);
    });
  }

  getApiConfiguration(): void {
    this.moviesService.getApiConfiguration().subscribe((config) => {
      this.apiConfiguration = config;
      const baseUrl = this.apiConfiguration.images.base_url;
      this.posterImage =
        baseUrl +
        this.apiConfiguration.images.poster_sizes.find(
          (size: string) => size === 'w342'
        );

      this.backdrop =
        baseUrl +
        this.apiConfiguration.images.backdrop_sizes.find(
          (size: string) => size === 'w1280'
        );

      this.castImage =
        baseUrl +
        this.apiConfiguration.images.profile_sizes.find(
          (size: string) => size === 'w185'
        );

      this.recommendationsImage =
        baseUrl +
        this.apiConfiguration.images.poster_sizes.find(
          (size: string) => size === 'w342'
        );
    });
  }
}
