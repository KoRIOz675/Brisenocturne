import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { AboutUsComponent } from '../../component/about-us/about-us.component';

@Component({
  selector: 'app-about-us-page',
  imports: [HeaderComponent, AboutUsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsPageComponent {

}
