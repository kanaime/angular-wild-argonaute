import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DocumentReference, Firestore } from '@angular/fire/firestore';
import { collection, doc } from 'firebase/firestore';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-add',

 templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor (private router:Router, private db:DbService, firestore:Firestore) {}

  onSubmit(form: NgForm){
    this.db.addUser(form.value)


    .then((data: DocumentReference)=>{
      console.log(data.id);
      let user:User = form.value;
      user.id = data.id;

      this.db.updateUser(data.id, user);

      this.router.navigate(['/']);

    }).catch((err)=>{
      console.log(err);

    })
  }

}


