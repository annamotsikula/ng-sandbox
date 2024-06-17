import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-routing.module';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL } from './helpers/contstants/contstants';
import { CartComponent } from './shop/cart/cart.component';
import { RequestInterceptor } from './helpers/services/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SignInComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [
    { provide: BASE_URL, useValue: 'https://dummyjson.com' },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
