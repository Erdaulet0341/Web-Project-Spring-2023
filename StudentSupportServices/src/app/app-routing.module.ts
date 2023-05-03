import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from "./about/about.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {CoordinatorComponent} from "./coordinator/coordinator.component";
import {ProfileComponent} from "./profile/profile.component";
import { BooksComponent } from './books/books.component';
import { FoodsComponent } from './foods/foods.component';
import {ShopComponent} from "./shop/shop.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'about', component:AboutComponent},
  {path: 'about', component:AboutComponent},
  {path: 'coordinator', component:CoordinatorComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'books', component: BooksComponent},
  {path: 'foods', component: FoodsComponent},
  {path: 'shop', component: ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
