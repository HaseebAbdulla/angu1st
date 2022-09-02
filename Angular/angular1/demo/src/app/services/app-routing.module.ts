import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { CoursesComponent } from '../courses/courses.component';
import { LoginGuard } from '../guard/login.guard';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';


const routes: Routes = [
{path:"",component:LoginComponent ,canActivate:[LoginGuard]},
{path:"signup",component:SignupComponent},
{path:"login",component:LoginComponent},
{path:"courses",component:CoursesComponent},
{path:"course-details",component:CourseDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
