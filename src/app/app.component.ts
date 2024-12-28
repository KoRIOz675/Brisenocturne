import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { IndexComponent } from "./index/index.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'brise-nocturne';
}
