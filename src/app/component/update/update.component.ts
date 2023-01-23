import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user:User={};

  constructor(private router:Router,private db:DbService, private aR:ActivatedRoute){

}
  ngOnInit(): void {
    const userid = this.aR.snapshot.paramMap.get('id');

    this.db.getUser(userid).subscribe(data => {

      this.user=data;


     });


  }
  onSubmit(form:NgForm){
    let userid = this.aR.snapshot.paramMap.get('id');
    this.db.updateUser(userid, form.value)
    this.router.navigate(['/']);
  }
}
