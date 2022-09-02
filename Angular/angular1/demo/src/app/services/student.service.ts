import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }


loadstudent(){
  return this.httpClient.get(baseUrl+'user')

}

PostData(student_data:any){
  return
}


}
