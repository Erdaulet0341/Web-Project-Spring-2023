import { Component } from '@angular/core';

import { Book, books } from '../books';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books = [...books]
}
