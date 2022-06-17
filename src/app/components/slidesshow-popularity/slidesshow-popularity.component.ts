import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfacesMDB';

@Component({
  selector: 'app-slidesshow-popularity',
  templateUrl: './slidesshow-popularity.component.html',
  styleUrls: ['./slidesshow-popularity.component.scss'],
})
export class SlidesshowPopularityComponent implements OnInit {

  @Input() moviePopularity: Movie[];
  @Output() cargarPopulares = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3
  }
  constructor() { }

  ngOnInit() {
 
  }

  onClick() {
    console.log('Boton para traer mas peliculas populares')
    this.cargarPopulares.emit();
  }

}
