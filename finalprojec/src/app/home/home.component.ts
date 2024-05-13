import { Component } from '@angular/core';
import { Home1Component } from './home-1/home-1.component';
import { BrowseComponent } from './browse/browse.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Home1Component, BrowseComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
