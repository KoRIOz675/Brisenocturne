import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutUsPageComponent } from './page/about-us/about-us.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'about-us', component:AboutUsPageComponent},
    {path: '**', component:PageNotFoundComponent}
];
