import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit {
  tv: any;
  apiConfiguration: any;
  posterImage?: string;
  backdrop?: string;
  castImage?: string;
  seasonImage?: string;
  recommendationsImage?: string;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MovieService
  ) {}

  ngOnInit(): void {
    this.getApiConfiguration();
    this.route.params.subscribe((routeParams) => {
      this.getTvSeries(routeParams.id);
    });
  }

  getTvSeries(id: number | null): void {
    id = !id ? +this.route.snapshot.paramMap.get('id')! : id;
    this.moviesService.getTvSeries(id).subscribe((tv) => {
      this.tv = tv;
      console.log(tv);
      for (let genre of tv.genres) console.log(genre.name);
    });
  }

  getApiConfiguration(): void {
    this.moviesService.getApiConfiguration().subscribe((config) => {
      this.apiConfiguration = config;
      const baseUrl = this.apiConfiguration.images.base_url;
      console.log(config);

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

      this.seasonImage =
        baseUrl +
        this.apiConfiguration.images.poster_sizes.find(
          (size: string) => size === 'w154'
        );

      this.recommendationsImage =
        baseUrl +
        this.apiConfiguration.images.poster_sizes.find(
          (size: string) => size === 'w342'
        );
    });
  }
}
