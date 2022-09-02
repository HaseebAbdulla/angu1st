import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  
  @Input()data:any
  @Output()childData=new EventEmitter()

  constructor() { }
  parentData = 0

  incrementdata(){
    this.parentData++
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  sendData(){
    this.childData.emit('Data From Child')
  }
  chilData = 0
  incrementData(){
    this.chilData
  }

}
