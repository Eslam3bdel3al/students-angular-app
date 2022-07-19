import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  previewed = 178;
  picSrc = "assets/Pics/IMG_0"+this.previewed+".JPG"
  intervalId:any;

  flipNext(){
    if (this.previewed >= 178 && this.previewed < 181){
          this.previewed++;
          this.picSrc = "assets/Pics/IMG_0"+this.previewed+".JPG"          
    }  
  }

  flipPrevious(){
    if (this.previewed > 178 && this.previewed <= 181){
      this.previewed--;
      this.picSrc = "assets/Pics/IMG_0"+this.previewed+".JPG"          
    }
 }

 slideShow(){
  this.intervalId = setInterval(() => {
      if (this.previewed == 181){
          this.previewed = 178;
          this.picSrc = "assets/Pics/IMG_0"+this.previewed+".JPG"          
        }else{
         this.flipNext();
     }
  },500);
}

stopSlide(){
  clearInterval(this.intervalId);
}
  constructor() { }

}
