import { Component, OnInit } from '@angular/core';
import { Publisher } from '../models/Publisher';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {
  publishers : Publisher[] = [];
  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit() {
    this.getPublishers();
  }

  getPublishers() : void{
    this.apiService.getPublishers().then(data => this.publishers = data);
  }

  editPublisher(publisher : Publisher){
    this.router.navigate(['/publishers/edit/' + publisher.id ]);
  }

  deletePublisher(id : number): void {
    this.apiService.deletePublisher(id).then(response => {this.getPublishers(); console.log(response)});
  }

  addPublisher() : void {
    this.router.navigate(['/publishers/edit/0']);
  }
}
