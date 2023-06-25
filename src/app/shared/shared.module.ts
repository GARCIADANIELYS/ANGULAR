import { NewReactiveProductModule } from './new-reactive-product/new-reactive-product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe'; 
import { ProductsFormModule } from './products-form/products-form.module';

@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductsFormModule,
    FormsModule,
    NewReactiveProductModule
  ],
  exports: [
    FilterPipe,
    ProductsFormModule,
    NewReactiveProductModule
  ]
})
export class SharedModule { }
