import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SocketService } from '../services/socket.service';
import { User } from '../user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messagecontent:string='';
  messages:string[] = [];
  ioConnection:any;
  username:string = '';
  errormsg = '';
  newuser:User;
  newmessage:Message;

  constructor(private socketService:SocketService,private router:Router) { }

  ngOnInit(){
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.newuser != null){
      this.username = this.newuser.username;
    }
    this.initIoConnection();
  }
  private initIoConnection(){
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
    .subscribe((message:string) => {
      this.messages.push(message);
      sessionStorage.setItem('userMessage',JSON.stringify(this.messages)); 
    });
  };  

  public chat(){
    if(this.messagecontent){
      this.socketService.send(this.messagecontent);
      this.messagecontent=null;
    }else{
      console.log('no message');
    }
  };

  
  addUser(){
    this.router.navigate(['/create-user']);
  };

}

