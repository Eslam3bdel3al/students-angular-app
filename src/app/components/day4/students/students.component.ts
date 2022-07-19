import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnChanges {

  students:{name:string,age:string,phone:string,address:string}[] = []
  @Input() fromParent:any;

  ngOnChanges(changes: SimpleChanges):void{

    if(changes["fromParent"].firstChange == false){
      this.students.push(this.fromParent);
    }
  }

}
