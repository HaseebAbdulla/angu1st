import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "admin"
  password = "123"



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username == 'admin' && this.password == '123') {
      localStorage.setItem('token', 'admin')
      this.router.navigate(['home'])
    }
    else {
      alert("username invalid")
    }

  }
  email: string = ""
  pass: string = ""

  submit(formDate: NgForm) {
    console.log(formDate.value)
  }
  userform = new FormGroup({
    email: new FormControl('haseebabdulla@gmail.com', Validators.required)
    

  })
  get emails() {
    return this.userform.get('email')
  }


}
