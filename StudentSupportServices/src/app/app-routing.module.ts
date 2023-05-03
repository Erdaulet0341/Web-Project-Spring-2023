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
<<<<<<< HEAD
import { FoodsComponent } from './foods/foods.component';
=======
import {ShopComponent} from "./shop/shop.component";
>>>>>>> 603c33035c3b4e20e4842ef8bafdc07977332d33

// ##
const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'topBar', component:TopBarComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'about', component:AboutComponent},
  {path: 'about', component:AboutComponent},
  {path: 'coordinator', component:CoordinatorComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'books', component: BooksComponent},
<<<<<<< HEAD
  {path: 'foods', component: FoodsComponent},
=======
<<<<<<< HEAD
  {path: 'foods', component: FoodsComponent}
=======
>>>>>>> 32f02d7d027526c24f2b70b8576d0e952335a9a1
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
