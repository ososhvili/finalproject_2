import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent,

    RouterLink,
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent implements OnInit {
  public product: any = [];
  public grandTotal!: number;
  cartServices = inject(CartService);

  ngOnInit(): void {
    this.cartServices.getProducts().subscribe((res) => {
      this.product = res;
      this.grandTotal = this.cartServices.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cartServices.removeCartItem(item);
  }
}
