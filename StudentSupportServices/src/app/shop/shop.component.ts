<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { Shop } from '../Interfaces';
>>>>>>> 9b92d34539ae426dba9f0e0d9b49c8bb3cacecb2
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
<<<<<<< HEAD
export class ShopComponent {
  target = false
  constructor(private shop: ShopService) {}

  getFetching() {
    this.target = this.shop.shopFetching()
=======
export class ShopComponent implements OnInit{
  shops: Shop[];

  constructor(private shopService:ShopService){
    this.shops = []
  }

  ngOnInit(): void {
    this.getAllShops()
  }

  getAllShops(){
    this.shopService
      .getAllFoods()
      .subscribe((data) =>(this.shops = data))
>>>>>>> 9b92d34539ae426dba9f0e0d9b49c8bb3cacecb2
  }
}
