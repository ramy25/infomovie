import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Input() posterImage?: string;
  tvOrMovie: string = 'movie';
  constructor() {}

  ngOnInit(): void {
    this.tvOrMovie = this.movie.media_type;
  }
}
