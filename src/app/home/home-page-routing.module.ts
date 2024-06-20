import { NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { ProductDashboardComponent } from "../shop/product-dashboard/product-dashboard.component";
import { ProductDetailsComponent } from "../shop/product-details/product-details.component";
import { SurveyComponent } from "../survey/survey.component";
import { productDetailResolver } from "../helpers/resolvers/product-details.resolver";
import { CartComponent } from "../shop/cart/cart.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: ProductDashboardComponent
            },
            {
                path: 'product/:id',
                component: ProductDetailsComponent,
                resolve: { singleProduct: productDetailResolver }
            },
            {
                path: 'cart',
                component: CartComponent
                // loadComponent: () => import('../shop/cart/cart.component').then(c => c.CartComponent)
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'survey',
                component: SurveyComponent
            }
        ]
    },

]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRouterModule {

}