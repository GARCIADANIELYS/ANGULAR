import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewReactiveProductRoutingModule } from './new-reactive-product-routing.module';
import { NewReactiveProductComponent } from './new-reactive-product.component';


@NgModule({
  declarations: [
    NewReactiveProductComponent
  ],
  imports: [
    CommonModule,
    NewReactiveProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewReactiveProductModule { }
