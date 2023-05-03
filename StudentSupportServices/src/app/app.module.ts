import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
=======
import { ShopComponent } from './shop/shop.component';
<<<<<<< HEAD
import { SettingsComponent } from './settings/settings.component';


=======
>>>>>>> 603c33035c3b4e20e4842ef8bafdc07977332d33
>>>>>>> 32f02d7d027526c24f2b70b8576d0e952335a9a1

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

=======
<<<<<<< HEAD
    FoodsComponent
=======
    ShopComponent
>>>>>>> 603c33035c3b4e20e4842ef8bafdc07977332d33
>>>>>>> 32f02d7d027526c24f2b70b8576d0e952335a9a1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
