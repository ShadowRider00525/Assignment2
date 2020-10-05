import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  username:string = '';
  email:string = '';
  pass:string = '';
  role:string = '';
  errormsg = '';
  newuser:User;

  constructor(private router:Router, private route:ActivatedRoute, private http:HttpClient) {}

  ngOnInit(){
    this.username = this.route.snapshot.params.username;
  }

  createUser(){
    this.http.post<User>('http://localhost:3000/api/auth', {username: this.username, pass: this.pass, role: this.role}).subscribe(
    data =>{
      if(data.valid == true){
        this.newuser = new User(data.username,data.email, data.pass,data.role)
        sessionStorage.setItem('currentUser',JSON.stringify(this.newuser));
      }
      else{
        this.errormsg = "User Already Exists"
      }
      error =>{
        this.errormsg = "User Already Exists"
      }
      console.log(data);
      })
  }

}
