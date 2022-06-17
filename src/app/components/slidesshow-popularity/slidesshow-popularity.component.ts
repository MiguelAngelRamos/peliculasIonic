import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfacesMDB';

@Component({
  selector: 'app-slidesshow-popularity',
  templateUrl: './slidesshow-popularity.component.html',
  styleUrls: ['./slidesshow-popularity.component.scss'],
})
export class SlidesshowPopularityComponent implements OnInit {

  @Input() moviePopularity: Movie[];

  slideOpts = {
    slidesPerView: 3.3
  }
  constructor() { }

  ngOnInit() {}

}
