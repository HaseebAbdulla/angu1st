import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { sortPipe } from './app.sort';
import { LoginService } from './service/login.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {  StudentService } from './services/student.service';
import { StudentsComponent } from './students/students.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CoursesComponent,
    CourseDetailsComponent,
    sortPipe,
    StudentsComponent,
    UpdatestudentComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    
  ],
  providers: [LoginService , StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
