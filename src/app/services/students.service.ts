import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  dbUrl = "http://localhost:3000/students";
  constructor(private myStudent:HttpClient) { }

  getAllStudents(){
    return this.myStudent.get(this.dbUrl);
  };

  getstudentById(id:any){
    return this.myStudent.get(this.dbUrl+"/"+id);
  }

  addStudent(student:any){
    return this.myStudent.post(this.dbUrl,student);
  }

  updateStudentById(id:any,student:any){
    return this.myStudent.put(this.dbUrl+"/"+id,student);
  }

  deleteStudentById(id:any){
    return this.myStudent.delete(this.dbUrl+"/"+id)
  }

}
