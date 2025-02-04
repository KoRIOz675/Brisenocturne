import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutUsComponent } from './page/about-us/about-us.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'about-us', component:AboutUsComponent},
];
