import { Component } from '@angular/core';
import { NavBlankComponent } from "../../components/nav-blank/nav-blank.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss'],
  imports: [CommonModule, NavBlankComponent, RouterModule, FooterComponent]
})
export class BlankLayoutComponent {

}
