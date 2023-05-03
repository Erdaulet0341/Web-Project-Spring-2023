import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Food} from "./Interfaces";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  BASE_URL= 'http://127.0.0.1:4000';

  constructor(private http: HttpClient) {}

  getAllFoods():Observable<Food[]>{
    return this.http.get<Food[]>(
      `${this.BASE_URL}/api/foods`);
  }
}
