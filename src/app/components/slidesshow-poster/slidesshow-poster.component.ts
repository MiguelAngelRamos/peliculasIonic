import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfacesMDB';

@Component({
  selector: 'app-slidesshow-poster',
  templateUrl: './slidesshow-poster.component.html',
  styleUrls: ['./slidesshow-poster.component.scss'],
})
export class SlidesshowPosterComponent implements OnInit {

  @Input() moviesPosters: Movie[];

  slideOpts = {
    slidesPerView:3.2,
  }
  constructor() { }

  ngOnInit() {}

}
