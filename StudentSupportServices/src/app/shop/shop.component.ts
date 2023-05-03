import { Component } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  target = false
  constructor(private shop: ShopService) {}

  getFetching() {
    this.target = this.shop.shopFetching()
  }
}
