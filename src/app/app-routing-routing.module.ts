import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { authGuard, autoLogIn } from './helpers/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: SignInComponent,
    canActivate: [autoLogIn]
  },
  {
    path: 'main',
    canActivate: [authGuard],
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
