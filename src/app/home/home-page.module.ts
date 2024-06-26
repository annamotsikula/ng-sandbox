import { NgModule } from "@angular/core";
import { HeaderComponent } from "../layouts/header/header.component";
import { FooterComponent } from "../layouts/footer/footer.component";
import { HomePageRouterModule } from "./home-page-routing.module";
import { CommonModule } from "@angular/common";
import { ProductCategoryDirective } from "../helpers/directives/product-category.directive";
import { HomeComponent } from "./home.component";
import { TruncatePipe } from "../helpers/pipes/truncate.pipe";
import { HighlighterDirective } from "../helpers/directives/highlighter.directive";
import { AddProductComponent } from "../shop/add-product/add-product.component";
import { ProductDashboardComponent } from "../shop/product-dashboard/product-dashboard.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductComponent } from "../shop/product/product.component";
import { RatingStarsComponent } from "../shop/rating-stars/rating-stars.component";
import { ProductDetailsComponent } from '../shop/product-details/product-details.component';
import { SurveyComponent } from '../survey/survey.component';
import { BASE_URL } from "../helpers/contstants/contstants";
import { PaginatorComponent } from '../shop/paginator/paginator.component';
import { BadgeComponent } from "../shared/components/badge.component";
import { CartComponent } from "../shop/cart/cart.component";
const pipes = [
  TruncatePipe
];

const directives = [
  HighlighterDirective,
  ProductCategoryDirective
];
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDashboardComponent,
    ProductComponent,
    AddProductComponent,
    RatingStarsComponent,
    ...pipes,
    ...directives,
    ProductDetailsComponent,
    SurveyComponent,
    PaginatorComponent
  ],
  imports: [CommonModule, FormsModule, HomePageRouterModule, ReactiveFormsModule, BadgeComponent, CartComponent],
})
export class HomePageModule {

}