import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LocalDataService } from '../../services/localstorage/local-data.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
   local=inject(LocalDataService)

   constructor(private router:Router){
            const user=localStorage.getItem('user')
            if(user){
               this.router.navigate(['/profile'])
            }
   }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9 ]+@[a-zA-Z]+\.[a-z]{2,}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });

  loginUser(){
      let  user=this.local.checkUser(this.loginForm.value)
      if(user){
         localStorage.setItem('user',JSON.stringify(user))
        this.router.navigate(['/profile'])  
      }else{
        alert('invalid credentials')
      }
  }


}
