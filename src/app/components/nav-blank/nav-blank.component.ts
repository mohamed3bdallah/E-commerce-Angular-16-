import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent {

}
