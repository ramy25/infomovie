import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css'],
})
export class TrendingMoviesComponent implements OnInit {
  trendingDay: any;
  trendingWeek: any;
  posterImage?: string;
  dayOrWeek: boolean = true;
  apiConfiguration: any;

  constructor(private moviesService: MovieService) {}

  ngOnInit(): void {
    this.getTrendingDay();
    this.getTrendingWeek();
    this.getApiConfiguration();
  }

  getTrendingDay(): void {
    this.moviesService.getTrendingDay().subscribe((trend) => {
      this.trendingDay = trend.results;
      console.log(trend);
    });
  }

  getTrendingWeek(): void {
    this.moviesService.getTrendingWeek().subscribe((trend) => {
      this.trendingWeek = trend.results;
      console.log(trend);
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
