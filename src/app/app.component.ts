import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router, private route:ActivatedRoute) {}

  title = 'Assignment2';

  logOut(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
