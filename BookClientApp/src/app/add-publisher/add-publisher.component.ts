import { Component, OnInit } from '@angular/core';
import { Publisher } from '../models/Publisher';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {

  publisher : Publisher;
  submited : boolean = false;
  constructor(private apiService : ApiService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      let id = params['id'];
      if(id > 0){
        this.apiService.getPublisher(id).then(res => this.publisher = res);
      }else{
        this.publisher = new Publisher();
        this.publisher.id = -1;
      }
    });

  }

  onSubmit() {
    this.submited = true;
    if(this.publisher.id > 0){
      this.apiService.updatePublisher(this.publisher)
        .then(r => this.router.navigate(['/publishers']));
    }else{
      this.apiService.addPublisher(this.publisher)
        .then(r => this.router.navigate(['/publishers']));
    }
  }

  discard() {
    this.router.navigate(['/publishers']);
  }

}
