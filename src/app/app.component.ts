import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-commerce';
  onTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  }
}
