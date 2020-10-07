import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email:string='';
  role:string='';
  newuser:User;
  id:number = 0;

  constructor(private router:Router) { }

  ngOnInit(){
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.newuser != null){
      this.email = this.newuser.email;
      this.role = this.newuser.role;
    }else{
      this.router.navigate(['/login']);
    }
  }

  updateItem(){
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.newuser != null){
      this.newuser.email = this.email;
      this.newuser.role = this.role;
      sessionStorage.setItem('currentUser',   JSON.stringify(this.newuser));
    }
  } 
}
