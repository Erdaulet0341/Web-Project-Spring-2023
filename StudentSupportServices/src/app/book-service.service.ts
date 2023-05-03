import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./Interfaces";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  BASE_URL= 'http://127.0.0.1:4000';

  constructor(private http: HttpClient) {}

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(
      `${this.BASE_URL}/api/books`);
  }

}
