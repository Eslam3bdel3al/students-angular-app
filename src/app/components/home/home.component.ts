import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  name = "";
  age = "";

  get Age(){
    return +this.age>=18 && +this.age<=40||this.age=="";//true|false
  }

  @Output() myEvent = new EventEmitter();

  AddNewStudent(){
    let newStudent = {name:this.name, age:this.age};
    if(+newStudent.age>=18 && +newStudent.age<=40){
      this.myEvent.emit(newStudent);
    }
  };

}
