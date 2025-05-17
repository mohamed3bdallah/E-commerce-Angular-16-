import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoryComponent } from './components/category/category.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'landing', component: LandingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'brand', component: BrandsComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'details', component: DetailsComponent
       },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
