import { Component, OnInit } from '@angular/core';
import { Food } from '../Interfaces';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  foods: Food[]
  constructor(private foodService: FoodService){
    this.foods = []
  }

  ngOnInit(): void {
    this.getAllFoods()
  }

  getAllFoods(){
    this.foodService
      .getAllFoods()
      .subscribe((data) =>(this.foods = data))
  };

}
