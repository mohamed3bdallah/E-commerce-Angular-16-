import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  masErr:string=''
  masSuc:string=''
  constructor(private readonly auth: AuthService , private router:Router) {}
  loginForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
    ]),
    rePassword: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });


  formSubmit() {
    if(this.loginForm.valid) {
      this.auth.register(this.loginForm.value).subscribe({
        next: (res) => {
          if(res.message == 'success'){
            this.masSuc= "Welcome to Elegance";
           setTimeout(() => {
            this.router.navigate(['/login'])
           }, 1000);

          }
          console.log(res);
        },
        error: (err:HttpErrorResponse) => {
          this.masErr=err.error.message

          // console.log(err);
        },
      });
    }


  }

}
