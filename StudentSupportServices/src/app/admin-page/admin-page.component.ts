import { Component } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  constructor(private shop: ShopService) {}

  shopFetching() {
    return this.shop.shopFetching()
  }
}
