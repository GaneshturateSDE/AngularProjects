import { routes } from './../../app.routes';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LocalDataService } from '../../services/localstorage/local-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css',
})
export class RegisterationComponent implements OnInit{
  localData = inject(LocalDataService);

  registerForm: FormGroup = new FormGroup({});
   
  constructor(private router:Router) {
    const user=localStorage.getItem('user')
    if(user){
       this.router.navigate(['/profile'])
    }
  }
  ngOnInit(): void {
    this.initializeRegistrationForm();
  }

  initializeRegistrationForm() {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z/s]+$/),
      ]),
      companyName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ]),
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
  }

  onRegisterUser() {
    this.localData.addUser(this.registerForm.value);
    this.initializeRegistrationForm();
    alert('User registered successfully');
    this.router.navigate(['/auth/login']);
  }
}
