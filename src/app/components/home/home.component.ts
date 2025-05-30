import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDataService } from 'src/app/shared/services/get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { Iproduct } from 'src/app/shared/interfaces/iproduct';
import { RouterLink, RouterModule } from '@angular/router';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Icategory } from 'src/app/shared/interfaces/icategory';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      HttpClientModule,
      RouterModule,
      SearchPipe,
      CommonModule,
      FormsModule,
      RouterLink,
      CarouselModule,
    ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
private readonly getDataService = inject(GetDataService);
  searchTerm: string = '';
  active: string = '';
  products: Iproduct[] = [];
  categories: Icategory[] = [];
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
    this.getDataService.getProduct().subscribe({
      next: (res) => {
        this.products = res.data;
        // console.log(this.products);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getCategory() {
    this.getDataService.getCategory().subscribe({
      next: (res) => {
        this.categories = res.data;
        console.log(this.categories);
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
  categoryOptions: OwlOptions = {
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
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    // nav: true,
  };

  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
  }
}
