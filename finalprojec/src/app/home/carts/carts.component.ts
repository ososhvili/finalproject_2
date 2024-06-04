import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [RouterLink, NgFor, CommonModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss',
})
export class CartsComponent implements OnInit {
  public myArr = [
    {
      cost: '$2.500',
      productName: 'Syltherine',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 1.png',
    },
    {
      cost: '$2.500',
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
      cost: '$5.500',
      productName: 'Respira',
      Product: 'Outdoor bar table and stool',
      img: '../../../assets/images/image 4.png',
    },
    {
      cost: '$3.500',
      productName: 'Small mug',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 6.png',
    },
    {
      cost: '$6.500',
      productName: 'Pingky',
      Product: 'Cute bed set',
      img: '../../../assets/images/image 7.png',
    },
    {
      cost: '$5.000',
      productName: 'Potty',
      Product: 'Minimalist flower pot',
      img: '../../../assets/images/image 8.png',
    },
    {
      cost: '$2.500',
      productName: 'Syltherine',
      Product: 'Stylish cafe chair',
      img: '../../../assets/images/image 1.png',
    },
  ];

  public sortedArr = this.myArr.sort((a, b) => Number(a.cost) - Number(b.cost));

  public dropDown = new FormControl();

  ngOnInit(): void {
    this.dropDown.valueChanges.subscribe((value) => {
      this.sortedArr;
    });
  }
}
