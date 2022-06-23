import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {

  @Input() id: number;

  constructor() { }

  ngOnInit() {
    console.log('El id es: ', this.id);
  }

}
