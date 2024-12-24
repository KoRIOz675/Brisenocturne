import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { MainContentIndexComponent } from "./main-content-index/main-content-index.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainContentIndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'brise-nocturne';
}
