import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { BooksComponent } from './books/books.component';

import { RouterModule }   from '@angular/router';
import { PublishersComponent } from './publishers/publishers.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    PublishersComponent,
    AddBookComponent,
    AddPublisherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BooksComponent,
      },
      {
        path: 'publishers',
        component: PublishersComponent
      },
      {
        path: 'publishers/edit/:id',
        component: AddPublisherComponent
      },
      {
        path: 'books/edit/:id',
        component: AddBookComponent
      }
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
