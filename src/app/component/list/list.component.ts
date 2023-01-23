import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  console = console;
  users:User[]=[]

  constructor(private router:Router,private db: DbService){

    this.db.getUsers().subscribe((data)=>{

      this.users=data;

    })
  }

  deleteThisUser(userid:any){
    this.db.deleteUser(userid);

  }

  getUser(userid:any){
    this.db.getUser(userid);
  }
}
