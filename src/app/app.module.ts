import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BookComponent } from './books/book/book.component';
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { AuthModule } from "./auth/auth.module";

@NgModule({
    declarations: [AppComponent, CartComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, BooksModule, AuthModule],
    bootstrap: [AppComponent],
})
export class AppModule {}