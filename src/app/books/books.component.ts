import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name: string = 'Clean Code';
  author: string = 'Robert C Martin';
  src: string = 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg';

  name2: string = 'Pragmatic Programmer';
  author2: string = 'David Thomas';
  src2: string = 'https://m.media-amazon.com/images/P/B07VRS84D1.01._SCLZZZZZZZ_SX500_.jpg';

  isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  handleClick() {
    this.isDisabled = true;
  }

  myName: string = ''
}
