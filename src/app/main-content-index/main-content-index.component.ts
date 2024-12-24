import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content-index',
  imports: [],
  templateUrl: './main-content-index.component.html',
  styleUrl: './main-content-index.component.css'
})
export class MainContentIndexComponent {
  ImagePath: String;

  constructor() {
    this.ImagePath = '/main-content-index.png'
  }
}
