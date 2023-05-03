import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { ProfileComponent } from './profile/profile.component';
import { BooksComponent } from './books/books.component';
<<<<<<< HEAD

import { FoodsComponent } from './foods/foods.component';

import { ShopComponent } from './shop/shop.component';

import { SettingsComponent } from './settings/settings.component';




=======
import { FoodsComponent } from './foods/foods.component';
import { ShopComponent } from './shop/shop.component';
import { SettingsComponent } from './settings/settings.component';

>>>>>>> d705d958c10d10d747a198e0900e24b3b3a4cba2
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactUsComponent,
    CoordinatorComponent,
    ProfileComponent,
    BooksComponent,
<<<<<<< HEAD

    FoodsComponent,
    ShopComponent,
    SettingsComponent,


    FoodsComponent,

    ShopComponent

=======
    FoodsComponent,
    ShopComponent,
    SettingsComponent,
    FoodsComponent,
    ShopComponent
>>>>>>> d705d958c10d10d747a198e0900e24b3b3a4cba2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
