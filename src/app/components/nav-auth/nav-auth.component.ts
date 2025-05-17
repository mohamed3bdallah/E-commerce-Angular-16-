import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.scss']
})
export class NavAuthComponent implements OnInit {
  isLoginActive:boolean = false;

  isRegisterActive:boolean = false;
  constructor(private router:Router){}
  Activation(value:boolean){
    this.isLoginActive = value;
    this.isRegisterActive =!value;
   }
  ngOnInit(){
    if(this.router.url==='/login'){
      this.isLoginActive = true;
      this.isRegisterActive = false;
    }else if(this.router.url==='/register'){
      this.isLoginActive = false;
      this.isRegisterActive = true;
    }
  }
}
