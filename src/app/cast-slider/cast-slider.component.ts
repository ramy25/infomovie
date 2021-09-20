import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.css'],
})
export class CastSliderComponent implements OnInit {
  @Input() credits: any;
  @Input() castImage?: string;

  maxCast: number = 8;
  constructor() {}

  ngOnInit(): void {}
}
