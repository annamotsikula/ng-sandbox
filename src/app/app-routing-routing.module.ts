import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./home/home-page.module').then(module => module.HomePageModule),
    // children: [
    //   {
    //     path: 'about',
    //     component: AboutComponent
    //   }
    // ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
