import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [
  ]
})
export class PostsComponent implements OnInit {

  allPosts:any;

  constructor(private myservice:GetDataService) { }


  ngOnInit(): void {
    this.myservice.getAllPosts().subscribe(
      (posts) => {
        console.log(posts);
        this.allPosts = posts;
      },
      (err) => {console.log(err)});
  }

}
