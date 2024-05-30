import { NgModule } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { HomePageRouterModule } from "./home-page-routing.module";
import { CommonModule } from "@angular/common";
import { ProductCategoryDirective } from "../helpers/directives/product-category.directive";
import { HomeComponent } from "./home.component";
import { TruncatePipe } from "../helpers/pipes/truncate.pipe";
import { HighlighterDirective } from "../helpers/directives/highlighter.directive";
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
        // ProductComponent,
        // AddProductComponent,
        // ProductDashboardComponent,
        // RatingStarsComponent,
        // ...pipes,
        // ...directives
    ],
    imports: [CommonModule, HomePageRouterModule],
    // exports: [...directives, ...pipes, ]
})
export class HomePageModule {

}