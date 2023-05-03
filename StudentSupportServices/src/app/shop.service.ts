import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Shop} from "./Interfaces";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  BASE_URL= 'http://127.0.0.1:4000';

  constructor(private http: HttpClient) {}

  getAllFoods():Observable<Shop[]>{
    return this.http.get<Shop[]>(
      `${this.BASE_URL}/api/shops`);
  }
}
