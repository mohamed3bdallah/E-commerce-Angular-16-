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

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
    ]),

  });


  formSubmit() {
    if(this.loginForm.valid) {
      this.auth.logIn(this.loginForm.value).subscribe({
        next: (res) => {
          if(res.message == 'success'){
            this.masErr=''
            this.masSuc= "Welcome Back "
           setTimeout(() => {
            this.router.navigate(['/home'])
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
