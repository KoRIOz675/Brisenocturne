import { Component } from '@angular/core';

import { HeaderComponent } from "../../component/header/header.component"; 
import { IndexComponent } from "../../component/index/index.component";
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, IndexComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
