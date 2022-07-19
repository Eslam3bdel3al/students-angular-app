import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  constructor(private theStudent:StudentsService) { }

  ngOnInit(): void {
  }

  @Input() studentData:any;

  @Output() afterDelete = new EventEmitter();
 
  remove(id:any){
    if (confirm("are you sure?")){
      this.theStudent.deleteStudentById(id).subscribe( () => {
        this.afterDelete.emit(); 
      });     
    }
    
  }
}
