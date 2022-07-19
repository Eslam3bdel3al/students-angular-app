import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: [
  ]
})
export class UpdateComponent implements OnInit {

  studentId = "";
  constructor(activeID:ActivatedRoute, private theStudent:StudentsService, private router:Router) {
    this.studentId = activeID.snapshot.params["id"];
  
   }

  student:any;
  mystudent:any;
  
  
  SendData(n:string, a:string, ph:string, ad:string){
    if (n !== "" && n !== null){
      if (a !== "" && a !== null){
        if (ph !== "" && ph !== null){
          if (ad !== "" && ad !== null){
            if(this.validation.valid){
              this.student = {name:n,age:a,phone:ph,address:ad};
              this.theStudent.updateStudentById(this.studentId,this.student).subscribe( () => {
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
    this.theStudent.getstudentById(this.studentId).subscribe( (data) => {
      this.mystudent = data;
      this.validation.controls.name.patchValue(this.mystudent.name);
      this.validation.controls.age.patchValue(this.mystudent.age);
      this.validation.controls.phone.patchValue(this.mystudent.phone);
      this.validation.controls.address.patchValue(this.mystudent.address);
    },
    (err) => {console.log(err)});
    
    
  }
  


  validation = new FormGroup({
    name: new FormControl (null,[Validators.pattern(/^[a-zA-z ]+$/)]),
    age: new FormControl (null,[Validators.min(18),Validators.max(40)]),
    phone: new FormControl (null,[Validators.pattern(/^010[0-9]{8}$|011[0-9]{8}$|012[0-9]{8}$/)]),
    address: new FormControl(null,Validators.minLength(4))
  })

}
