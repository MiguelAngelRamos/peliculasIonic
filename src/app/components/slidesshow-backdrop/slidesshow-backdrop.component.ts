import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfacesMDB';

@Component({
  selector: 'app-slidesshow-backdrop',
  templateUrl: './slidesshow-backdrop.component.html',
  styleUrls: ['./slidesshow-backdrop.component.scss'],
})
export class SlidesshowBackdropComponent implements OnInit {

  @Input() recentMoviesChildren: Movie[];
  constructor() { }

  ngOnInit() {}

}
