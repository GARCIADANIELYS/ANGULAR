import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFormRoutingModule } from './products-form-routing.module';
import { ProductsFormComponent } from './products-form.component';


@NgModule({
  declarations: [
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsFormRoutingModule
  ],
  exports: [
    ProductsFormComponent
  ]
})
export class ProductsFormModule { }
