import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/Book';
import { Publisher } from '../models/Publisher';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({ 
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book : Book = null;
  isNew : boolean = false;
  submited: boolean = false;
  publishers : Publisher[] = [];
  constructor(private apiService : ApiService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getPublishers().then(res => this.publishers = res);
    this.route.params
    .subscribe(params => {
      let id = params['id'];
      console.log(id);
      if(id != '0'){
        this.apiService.getBook(id).then(res => this.book = res);
      }else{
        this.book = new Book();
        this.isNew = true;
      }
    });
  }

  onSubmit() {
    this.submited = true;
    if(!this.isNew){
      this.apiService.updateBook(this.book)
        .then(r => this.router.navigate(['/']));
    }else{
      this.apiService.addBook(this.book)
        .then(r => this.router.navigate(['/']));
    }
  }

  discard() {
    this.router.navigate(['/']);
  }

}
