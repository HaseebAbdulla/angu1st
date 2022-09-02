import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  students =[
    "Tom","Shane","jack","rose"
  ]
  digits =[
    "20","50","40"
  ]


  

  constructor(private fishService:StudentService) { }


  studentData:any

  ngOnInit(): void {
    this.fishService.loadstudent().subscribe((res)=>{
      console.log(res)
      this.studentData(res)
    })
  }

 
 
 
 
 
 
 
 
 
  user={username:'haseeb',courses:'python'}
  sendData(value:any){
    console.log(value)
  }

}
