import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Observable, map, tap } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { FilterPipe } from '../../shared/filter.pipe';

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipe,
  ],
})
export class CardsComponent implements OnInit {
  p: any = 1;
  searchKey: string = '';
  // itemsPerPage = '16';

  public itemsPerPage = new FormControl(16) as FormControl<number>;

  // cardsNumber(event: Event) {
  //   this.itemsPerPage = (<HTMLInputElement>event.target).value;
  // }
  cartSevice = inject(CartService);

  public productList = [
    {
      id: 1,
      price: 2500,
      cost: '$2.500',
      productName: 'Syltherine',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 1.png',
    },
    {
      id: 2,
      price: 2500,
      productName: 'Leviosa',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 2.png',
    },
    {
      id: 3,
      price: 7000,
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
    {
      id: 4,
      price: 3500,
      productName: 'Leviosa',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 2.png',
    },
    {
      id: 5,
      price: 6500,
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
    {
      id: 6,
      price: 5500,
      productName: 'Respira',
      Product: 'Outdoor bar table and stool',
      img: '../../../assets/images/image 4.png',
    },
    {
      id: 7,
      price: 4600,
      productName: 'Small mug',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 6.png',
    },
    {
      id: 8,
      price: 6500,
      productName: 'Pingky',
      Product: 'Cute bed set',
      img: '../../../assets/images/image 7.png',
    },
    {
      id: 9,
      price: 2500,
      productName: 'Leviosa',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 2.png',
    },
    {
      id: 10,

      price: 7000,
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
    {
      id: 11,

      price: 5000,
      productName: 'Potty',
      Product: 'Minimalist flower pot',
      img: '../../../assets/images/image 8.png',
    },
    {
      id: 12,

      price: 3500,
      productName: 'Small mug',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 6.png',
    },
    {
      id: 13,
      price: 2500,
      productName: 'Syltherine',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 1.png',
    },
    {
      id: 14,
      price: 2500,
      productName: 'Leviosa',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 2.png',
    },
    {
      id: 14,
      price: 7000,
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
    {
      id: 15,

      price: 5000,
      productName: 'Potty',
      Product: 'Minimalist flower pot',
      img: '../../../assets/images/image 8.png',
    },
    {
      id: 16,
      price: 2500,
      productName: 'Leviosa',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 2.png',
    },
    {
      price: '$7.000',
      cost: 7000,
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
    {
      price: '$7.000',
      cost: 7000,
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
    {
      price: '$2.500',
      cost: 2500,
      productName: 'Syltherine',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 1.png',
    },
    {
      price: '$2.500',
      cost: 2500,
      productName: 'Leviosa',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 2.png',
    },
    {
      cost: '$7.000',
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
    {
      price: '$5.000',
      cost: 5000,
      productName: 'Potty',
      Product: 'Minimalist flower pot',
      img: '../../../assets/images/image 8.png',
    },
    {
      price: '$2.500',
      cost: 2500,
      productName: 'Leviosa',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 2.png',
    },
    {
      price: '$5.500',
      cost: 5500,
      productName: 'Respira',
      Product: 'Outdoor bar table and stool',
      img: '../../../assets/images/image 4.png',
    },
    {
      price: '$3.500',
      cost: 3500,
      productName: 'Small mug',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 6.png',
    },
    {
      price: '$6.500',
      cost: 6500,
      productName: 'Pingky',
      Product: 'Cute bed set',
      img: '../../../assets/images/image 7.png',
    },
    {
      price: '$2.500',
      cost: 2500,
      productName: 'Leviosa',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 2.png',
    },
    {
      price: '$7.000',
      cost: 7000,
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
    {
      price: '$5.000',
      cost: 5000,
      productName: 'Potty',
      Product: 'Minimalist flower pot',
      img: '../../../assets/images/image 8.png',
    },
    {
      price: '$3.500',
      cost: 3500,
      productName: 'Small mug',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 6.png',
    },
    {
      price: '$7.000',
      cost: 7000,
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
  ];
  addToCart(item: any) {
    this.cartSevice.addtoCart(item);
  }

  public dropDown = new FormControl(true) as FormControl<boolean>;

  ngOnInit(): void {
    this.dropDown.valueChanges.pipe(tap()).subscribe((increase: boolean) => {
      this.sortArray(increase);
    });

    this.itemsPerPage.valueChanges
      .pipe(
        tap((val: number) => {
          if (val <= 0) this.itemsPerPage.setValue(1);
          if (val >= 16) this.itemsPerPage.setValue(16);
        })
      )
      .subscribe();
    this.productList.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.price });
    });
  }
  count = this.productList.filter((item) => item).length;

  public sortArray(increase: boolean) {
    this.productList.sort((a, b) =>
      increase
        ? Number(a.price) - Number(b.cost)
        : Number(b.price) - Number(a.cost)
    );
    console.log(increase);
  }
}
