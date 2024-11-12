import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  userData:any;
  constructor() {
    const local=localStorage.getItem('users');
    this.userData=local?JSON.parse(local):[]
   }


  addUser(user:any){
       this.userData.push(user)
       localStorage.setItem('users',JSON.stringify(this.userData))
  }
  checkUser(user:any){
    return this.userData.find((u: { email: any; password: any; })=> user.email === u.email && u.password === user.password)
  }
  
}
