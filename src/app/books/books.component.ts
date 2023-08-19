import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
  image: string;
  amount: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: 'clean code',
      author: 'robert c martin',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 25,
    },
    {
      name: 'pragmatic programmer',
      author: 'david thomas',
      image: 'https://m.media-amazon.com/images/P/B07VRS84D1.01._SCLZZZZZZZ_SX500_.jpg',
      amount: 30,
    },
  ]


  isShowing: boolean = true;

  constructor() { }

  ngOnInit(): void {}

}
