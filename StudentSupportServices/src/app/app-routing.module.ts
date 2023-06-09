import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from "./about/about.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {CoordinatorComponent} from "./coordinator/coordinator.component";
import {ProfileComponent} from "./profile/profile.component";
import { BooksComponent } from './books/books.component';
import { FoodsComponent } from './foods/foods.component';
<<<<<<< HEAD
import {ShopComponent} from "./shop/shop.component";
import { SettingsComponent } from './settings/settings.component';
import { AdminModeComponent } from './admin-mode/admin-mode.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
=======
import { ShopComponent } from './shop/shop.component';
import { TopBarComponent } from './top-bar/top-bar.component';
>>>>>>> 9b92d34539ae426dba9f0e0d9b49c8bb3cacecb2

// ##
const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'topBar', component:TopBarComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'about', component:AboutComponent},
  {path: 'coordinator', component:CoordinatorComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'books', component: BooksComponent},
  {path: 'foods', component: FoodsComponent},
<<<<<<< HEAD
  {path: 'foods', component: FoodsComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'admin', component: AdminModeComponent},
  {path: 'admin-page', component: AdminPageComponent}
=======
  {path: 'shop', component: ShopComponent}
>>>>>>> 9b92d34539ae426dba9f0e0d9b49c8bb3cacecb2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
