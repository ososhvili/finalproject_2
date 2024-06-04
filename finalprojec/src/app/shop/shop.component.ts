import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ShopHeaderComponent } from '../shop/shop-header/shop-header.component';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ShopHeaderComponent,
    CardsComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  ngOnInit(): void {
    globalThis.window?.scrollTo(0, 0);
  }
}
