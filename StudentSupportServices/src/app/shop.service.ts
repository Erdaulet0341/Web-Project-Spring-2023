<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

=======
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Shop} from "./Interfaces";
>>>>>>> 9b92d34539ae426dba9f0e0d9b49c8bb3cacecb2

@Injectable({
  providedIn: 'root'
})
export class ShopService {
<<<<<<< HEAD

  constructor(private client: HttpClient) { }


  shopFetching() {
    return true
=======
  BASE_URL= 'http://127.0.0.1:4000';

  constructor(private http: HttpClient) {}

  getAllFoods():Observable<Shop[]>{
    return this.http.get<Shop[]>(
      `${this.BASE_URL}/api/shops`);
>>>>>>> 9b92d34539ae426dba9f0e0d9b49c8bb3cacecb2
  }
}
