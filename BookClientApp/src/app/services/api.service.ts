import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { Publisher } from '../models/Publisher';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const apiAddress : string = "http://localhost:8000/api";

@Injectable()
export class ApiService {

constructor(private http: Http) { }
  private headers = new Headers({'Content-Type': 'application/json'});
  getBooks(): Promise<Book[]> {
    return this.http.get(apiAddress + "/books")
      .toPromise()
      .then(response => { return response.json() as Book[]})
      .catch(this.handleError);
  }

  getBook(id : string): Promise<Book> {
    return this.http.get(apiAddress + "/books/" + id)
      .toPromise()
      .then(response => { return response.json() as Book })
      .catch(this.handleError);
  }

  deleteBook(id : string): Promise<boolean> {
    return this.http.delete(apiAddress + "/books/" + id)
      .toPromise();
  }

  addBook(book : Book) : Promise<Book> {
    return this.http.post(apiAddress + "/books", JSON.stringify(book), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Book)
      .catch(this.handleError);
  }

  updateBook(book : Book) : Promise<Book> {
    return this.http.put(apiAddress + "/books/" + book.id, JSON.stringify(book), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Book)
      .catch(this.handleError);
  }

  getPublishers() : Promise<Publisher[]> {
    return this.http.get(apiAddress + "/publishers")
      .toPromise()
      .then(response => {return response.json() as Publisher[]})
      .catch(this.handleError);
  }

  getPublisher(id : number) : Promise<Publisher> {
    return this.http.get(apiAddress + "/publishers/" + id)
      .toPromise()
      .then(response => {return response.json() as Publisher})
      .catch(this.handleError);
  }

  addPublisher(publisher : Publisher) : Promise<Publisher> {
    return this.http.post(apiAddress + "/publishers", JSON.stringify(publisher), {headers: this.headers})
      .toPromise()
      .then(result => result.json() as Publisher)
      .catch(this.handleError);
  }

  updatePublisher(publisher : Publisher) : Promise<Publisher> {
    return this.http.put(apiAddress + '/publishers/' + publisher.id, JSON.stringify(publisher), {headers: this.headers})
      .toPromise()
      .then(result => result.json() as Publisher)
      .catch(this.handleError);
  }

  deletePublisher(id : number): Promise<boolean> {
    return this.http.delete(apiAddress + "/publishers/" + id)
      .toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error');
    return Promise.reject(error.message || error);
  }
}
