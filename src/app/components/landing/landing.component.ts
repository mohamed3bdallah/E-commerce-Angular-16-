import { Component, inject, OnInit } from '@angular/core';
import { NavAuthComponent } from '../nav-auth/nav-auth.component';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { Iproduct } from 'src/app/shared/interfaces/iproduct';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports: [
    HttpClientModule,
    NavAuthComponent,
    RouterModule,
    SearchPipe,
    CommonModule,
    FormsModule,
    RouterLink,
    FooterComponent,
    CarouselModule,
  ],
})
export class LandingComponent implements OnInit {
  private readonly getDataService = inject(GetDataService);
  searchTerm: string = '';
  active: string = '';
  products: Iproduct[] = [];
  slidesReviews: any[] = [
    {
      src: '../../../assets/images/face1.JPG',
      name: 'Berry Gunawan',
      review:
        'Lorem ipsum dolor sit amet consectetur. Est vel risus hendrerit laoreet purus malesuada dignissim.',
    },
    {
      src: '../../../assets/images/face4.png',
      name: 'Jane Doe',
      review:
        'Lorem ipsum dolor sit amet consectetur. Est vel risus hendrerit laoreet purus malesuada dignissim.',
    },
    {
      src: '../../../assets/images/face3.JPG',
      name: 'John Berry ',
      review:
        'Lorem ipsum dolor sit amet consectetur. Est vel risus hendrerit laoreet purus malesuada dignissim.',
    },
    {
      src: '../../../assets/images/face2.png',
      name: 'Gunawan Doe',
      review:
        'Lorem ipsum dolor sit amet consectetur. Est vel risus hendrerit laoreet purus malesuada dignissim.',
    },
  ];
  putName(name: string) {
    this.active = name;
    this.searchTerm = name;
  }
  getProducts() {
    this.getDataService.getData().subscribe({
      next: (res) => {
        this.products = res.data;
        console.log(this.products);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    // nav: true,
  };

  ngOnInit(): void {
    this.getProducts();

  }
}
