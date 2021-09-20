import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommendations-slider',
  templateUrl: './recommendations-slider.component.html',
  styleUrls: ['./recommendations-slider.component.css'],
})
export class RecommendationsSliderComponent implements OnInit {
  @Input() recommendations: any;
  @Input() recommendationsImage?: string;
  @Input() type?: string;

  constructor() {}

  ngOnInit(): void {}
}
