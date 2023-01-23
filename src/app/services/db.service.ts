import { Injectable } from '@angular/core';
import { addDoc, collection, collectionChanges, collectionData, deleteDoc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private firestore: Firestore) { }

  addUser(user:User){
    let $usersRef= collection(this.firestore, 'users');

    return addDoc($usersRef, user);
  }


  getUsers(){
    let $usersRef= collection(this.firestore, 'users');
    return collectionData($usersRef,{idField: 'id'}) as Observable<User[]>;
  }

  getUser(id:any){
    let $usersRef=doc(this.firestore,'users/'+id);



    return docData($usersRef, {idField: "id"})
  }

  deleteUser(id:string){
    let $usersRef=doc(this.firestore,'users/'+id);
    return deleteDoc($usersRef);
  }



  updateUser(id:any, user:any){
    let $usersRef=doc(this.firestore,'users/'+id);
    return updateDoc($usersRef,user);
  }
}
