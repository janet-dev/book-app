import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Books';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books: Book[] = [];

  // dependency injection
  constructor(private booksService: BooksService) { }

  isShowing: boolean = true;

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

}
