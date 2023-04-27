import { Component } from '@angular/core';
import { foods } from '../foods';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {
  foods = [...foods]
}
