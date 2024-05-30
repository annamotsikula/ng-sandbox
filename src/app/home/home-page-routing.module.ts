import { NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { ProductDashboardComponent } from "../shop/product-dashboard/product-dashboard.component";
import { ProductDetailsComponent } from "../shop/product-details/product-details.component";
import { SurveyComponent } from "../survey/survey.component";

const routes : Routes = [  
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
                component: ProductDetailsComponent
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