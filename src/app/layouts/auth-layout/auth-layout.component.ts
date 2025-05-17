import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavAuthComponent } from "../../components/nav-auth/nav-auth.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterModule } from "@angular/router";
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule, NavAuthComponent, FooterComponent , RouterModule],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {

}
