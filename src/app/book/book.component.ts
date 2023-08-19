import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../types/Books';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  // new property called book of type Book 
  // which is initially an empty object of type Book
  // need the @Input a this is an input from another component
  @Input() book: Book = {} as Book;

  constructor() { }

  ngOnInit(): void {
  }

}
