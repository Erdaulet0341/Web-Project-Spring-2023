import { Component, OnInit } from '@angular/core';
import { Shop } from '../Interfaces';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
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
  }
}
