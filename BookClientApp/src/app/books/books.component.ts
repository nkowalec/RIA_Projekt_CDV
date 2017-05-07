import { Component, OnInit } from '@angular/core';
import {Book} from '../models/Book';
import {ApiService} from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private apiService : ApiService, private router : Router) { }
  books : Book[] = [];
  title = 'app works!';

  ngOnInit() : void{
    this.getBooks();
  }

  getBooks() : void{
    this.apiService.getBooks()
      .then(x => this.books = x);
  }

  deleteBook(id : string): void {
    this.apiService.deleteBook(id).then(response => this.getBooks());
  }

  addBook() : void {
    this.router.navigate(['/books/edit/0']);
  }

  editBook(book : Book) : void {
    this.router.navigate(['/books/edit/' + book.id]);
  }

}
