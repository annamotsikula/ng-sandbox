import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-routing.module';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL } from './helpers/contstants/contstants';
import { RequestInterceptor } from './helpers/services/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedComponentsModule,
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
