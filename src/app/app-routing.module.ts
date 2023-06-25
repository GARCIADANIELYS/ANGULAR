import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'prefix',
    loadChildren: () => import('src/app/features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'list',
    pathMatch: 'prefix',
    loadChildren: () => import('src/app/features/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'products-form',
    pathMatch: 'prefix',
    loadChildren: () => import('src/app/shared/products-form/products-form.module').then(m => m.ProductsFormModule)
  },
  {
    path: 'new-reactive-product',
    pathMatch: 'prefix',
    loadChildren: () => import('src/app/shared/new-reactive-product/new-reactive-product.module').then(m => m.NewReactiveProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
