import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  p: number = 1;
  // itemsPerPage = '16';

  public itemsPerPage = new FormControl(16) as FormControl<number>;

  // cardsNumber(event: Event) {
  //   this.itemsPerPage = (<HTMLInputElement>event.target).value;
  // }

  public myArr = [
    {
      cost: 2500,
      price: '$2.500',
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
      price: '$7000',
      cost: 7000,
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
    {
      price: '$3.500',
      cost: 3500,
      productName: 'Leviosa',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 2.png',
    },
    {
      price: '$6.500',
      cost: 6500,
      productName: 'Lolito',
      Product: 'Luxury big sofa',
      img: '../../../assets/images/image 3.png',
    },
    {
      price: '$5.500',
      cost: 5500,
      productName: 'Respira',
      Product: 'Outdoor bar table and stool',
      img: '../../../assets/images/image 4.png',
    },
    {
      price: '$4.600',
      cost: 4600,
      productName: 'Small mug',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 6.png',
    },
    // {
    //   cost: '$6.500',
    //   productName: 'Pingky',
    //   Product: 'Cute bed set',
    //   img: '../../../assets/images/image 7.png',
    // },
    // {
    //   cost: '$2.500',
    //   productName: 'Leviosa',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 2.png',
    // },
    // {
    //   cost: '$7.000',
    //   productName: 'Lolito',
    //   Product: 'Luxury big sofa',
    //   img: '../../../assets/images/image 3.png',
    // },
    // {
    //   cost: '$5.000',
    //   productName: 'Potty',
    //   Product: 'Minimalist flower pot',
    //   img: '../../../assets/images/image 8.png',
    // },
    // {
    //   cost: '$3.500',
    //   productName: 'Small mug',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 6.png',
    // },
    // {
    //   cost: '$2.500',
    //   productName: 'Syltherine',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 1.png',
    // },
    // {
    //   cost: '$2.500',
    //   productName: 'Leviosa',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 2.png',
    // },
    // {
    //   cost: '$7.000',
    //   productName: 'Lolito',
    //   Product: 'Luxury big sofa',
    //   img: '../../../assets/images/image 3.png',
    // },
    // {
    //   cost: '$5.000',
    //   productName: 'Potty',
    //   Product: 'Minimalist flower pot',
    //   img: '../../../assets/images/image 8.png',
    // },
    // {
    //   cost: '$2.500',
    //   productName: 'Leviosa',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 2.png',
    // },
    // {
    //   cost: '$7.000',
    //   productName: 'Lolito',
    //   Product: 'Luxury big sofa',
    //   img: '../../../assets/images/image 3.png',
    // },
    // {
    //   cost: '$7.000',
    //   productName: 'Lolito',
    //   Product: 'Luxury big sofa',
    //   img: '../../../assets/images/image 3.png',
    // },
    // {
    //   cost: '$2.500',
    //   productName: 'Syltherine',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 1.png',
    // },
    // {
    //   cost: '$2.500',
    //   productName: 'Leviosa',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 2.png',
    // },
    // {
    //   cost: '$7.000',
    //   productName: 'Lolito',
    //   Product: 'Luxury big sofa',
    //   img: '../../../assets/images/image 3.png',
    // },
    // {
    //   cost: '$5.000',
    //   productName: 'Potty',
    //   Product: 'Minimalist flower pot',
    //   img: '../../../assets/images/image 8.png',
    // },
    // {
    //   cost: '$2.500',
    //   productName: 'Leviosa',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 2.png',
    // },
    // {
    //   cost: '$5.500',
    //   productName: 'Respira',
    //   Product: 'Outdoor bar table and stool',
    //   img: '../../../assets/images/image 4.png',
    // },
    // {
    //   cost: '$3.500',
    //   productName: 'Small mug',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 6.png',
    // },
    // {
    //   cost: '$6.500',
    //   productName: 'Pingky',
    //   Product: 'Cute bed set',
    //   img: '../../../assets/images/image 7.png',
    // },
    // {
    //   cost: '$2.500',
    //   productName: 'Leviosa',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 2.png',
    // },
    // {
    //   cost: '$7.000',
    //   productName: 'Lolito',
    //   Product: 'Luxury big sofa',
    //   img: '../../../assets/images/image 3.png',
    // },
    // {
    //   cost: '$5.000',
    //   productName: 'Potty',
    //   Product: 'Minimalist flower pot',
    //   img: '../../../assets/images/image 8.png',
    // },
    // {
    //   cost: '$3.500',
    //   productName: 'Small mug',
    //   Product: 'Stylish cafe chair',
    //   img: '../../../assets/images/image 6.png',
    // },
    // {
    //   cost: '$7.000',
    //   productName: 'Lolito',
    //   Product: 'Luxury big sofa',
    //   img: '../../../assets/images/image 3.png',
    // },
  ];

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
  }
  count = this.myArr.filter((item) => item).length;

  public sortArray(increase: boolean) {
    this.myArr.sort((a, b) =>
      increase
        ? Number(a.cost) - Number(b.cost)
        : Number(b.cost) - Number(a.cost)
    );
    console.log(increase);
  }
}
