import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  db_url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private myClient:HttpClient) {};

  getAllPosts(){
    return this.myClient.get(this.db_url);
  }

  getPostByID(id:any){
    return this.myClient.get(this.db_url + "/" +id);    
  }
}
