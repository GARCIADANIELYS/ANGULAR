import { NewReactiveProductComponent } from './new-reactive-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{  
  path: '',
  pathMatch: 'full',
  component: NewReactiveProductComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewReactiveProductRoutingModule { }
