import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../types/Books';
import { CartService } from 'src/app/cart/cart.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  // new property called book of type Book 
  // which is initially an empty object of type Book
  // need the @Input() a this is an input from another component
  // parent to child data transfer
  @Input() book: Book = {} as Book;
  isInCart:boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}
