import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
name = "";
age = "";
phone = "";
address = "";

@Output() myEvent  = new EventEmitter()

SendData(n:string, a:string, ph:string, ad:string){
  if (n !== "" && n !== null){
    if (a !== "" && a !== null){
      if (ph !== "" && ph !== null){
        if (ad !== "" && ad !== null){
          if(this.validation.valid){
            this.name = n;
            this.age = a;
            this.phone = ph;
            this.address = ad;
        
            this.myEvent.emit({name:n,age:a,phone:ph,address:ad}) 
          }else{
            alert("can't submit!");
          }
        } else {
          alert("address is required")
        }
      } else {
        alert("phone is required")
      }
    } else {
      alert("age is required")
    }
  } else {
    alert ("name is requied");
  }
  
  
}

validation = new FormGroup({
  name: new FormControl (null,[Validators.pattern(/^[a-zA-z ]+$/)]),
  age: new FormControl (null,[Validators.min(18),Validators.max(40)]),
  phone: new FormControl (null,[Validators.pattern(/^010[0-9]{8}$|011[0-9]{8}$|012[0-9]{8}$/)]),
  address: new FormControl (null)
})



}
