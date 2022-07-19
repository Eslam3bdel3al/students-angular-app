import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private theStudent:StudentsService, private router:Router) { }

  student:any;

  SendData(n:string, a:string, ph:string, ad:string){
    if (n !== "" && n !== null){
      if (a !== "" && a !== null){
        if (ph !== "" && ph !== null){
          if (ad !== "" && ad !== null){
            if(this.validation.valid){
              this.student = {name:n,age:a,phone:ph,address:ad};
              this.theStudent.addStudent(this.student).subscribe( () => {
                this.router.navigateByUrl("/");
              });
              
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


  ngOnInit(): void {
  }

  validation = new FormGroup({
    name: new FormControl (null,[Validators.pattern(/^[a-zA-z ]+$/)]),
    age: new FormControl (null,[Validators.min(18),Validators.max(40)]),
    phone: new FormControl (null,[Validators.pattern(/^010[0-9]{8}$|011[0-9]{8}$|012[0-9]{8}$/)]),
    address: new FormControl(null,Validators.minLength(4))
  })

}
