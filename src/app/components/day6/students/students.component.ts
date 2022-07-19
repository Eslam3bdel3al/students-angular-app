import { Component, OnInit,AfterContentChecked  } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:any;

  constructor(private myStudents:StudentsService) { }

  ngOnInit(): void {
    this.myStudents.getAllStudents().subscribe(
      (data) => {this.students = data},
      (err) => {console.log(err)})
  }

  refresh(){
    this.ngOnInit();
  }

}
