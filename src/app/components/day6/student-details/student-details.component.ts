import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentId = "";
  myStudent:any;
  constructor(activeID:ActivatedRoute,private theStudent:StudentsService) {
      this.studentId = activeID.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.theStudent.getstudentById(this.studentId).subscribe( (data) => {
      this.myStudent = data;
    },
    (err) => {console.log(err)})
  }

}
