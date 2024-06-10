import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-routing.module';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL } from './helpers/contstants/contstants';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [
    { provide: BASE_URL, useValue: 'https://dummyjson.com' }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
