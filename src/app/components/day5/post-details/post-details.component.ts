import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styles: [
  ]
})
export class PostDetailsComponent implements OnInit {
  postId = "";
  thePost:any;
  constructor(myActivated:ActivatedRoute,private myservice:GetDataService) 
  {
    this.postId = myActivated.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.myservice.getPostByID(this.postId).subscribe(
      (data) => {
        this.thePost = data;
      },
      (err) => {
        console.log(err);
      })
  }

}
