import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from "@angular/common/http";
=======
import {HttpClientModule} from '@angular/common/http';

>>>>>>> 9b92d34539ae426dba9f0e0d9b49c8bb3cacecb2
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
import { FoodsComponent } from './foods/foods.component';
import { ShopComponent } from './shop/shop.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminModeComponent } from './admin-mode/admin-mode.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

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

    ShopComponent,


=======
>>>>>>> 9b92d34539ae426dba9f0e0d9b49c8bb3cacecb2
    FoodsComponent,
    ShopComponent,
    SettingsComponent,
    FoodsComponent,
<<<<<<< HEAD
    ShopComponent,
    AdminModeComponent,
    AdminPageComponent
=======
    ShopComponent
>>>>>>> 9b92d34539ae426dba9f0e0d9b49c8bb3cacecb2

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
<<<<<<< HEAD
    
=======
>>>>>>> 9b92d34539ae426dba9f0e0d9b49c8bb3cacecb2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
