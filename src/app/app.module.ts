import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './helpers/pipes/truncate.pipe';
import { HighlighterDirective } from './helpers/directives/highlighter.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './helpers/services/product.service';
import { AddProductComponent } from './add-product/add-product.component';

const pipes = [
  TruncatePipe
];

const directives = [
  HighlighterDirective
];

@NgModule({
  declarations: [
    AppComponent,
    ...pipes,
    ...directives,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
