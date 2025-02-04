import { Component } from '@angular/core';

import { IndexReservationComponent } from "../index-reservation/index-reservation.component";

@Component({
  selector: 'app-index',
  imports: [IndexReservationComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  ImagePath: String;

  constructor() {
    this.ImagePath = '/main-content-index.png'
  }
}
