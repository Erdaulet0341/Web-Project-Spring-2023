import { Component, OnInit } from '@angular/core';


import {Book} from '../Interfaces';
import {BookServiceService} from "../book-service.service";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  bookm: Book[];

  constructor(private bookService: BookServiceService) {
    this.bookm = [];
  }
  ngOnInit(){
    this.getAllBooks()
  }

  getAllBooks(){
    this.bookService.getAllBooks()
      .subscribe((data) => {
        this.bookm = data
      console.log(data)})
  }
}
