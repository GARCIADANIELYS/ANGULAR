import { SharedModule } from './../../shared/shared.module';
import { ListRoutingModule } from './list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ListModule { }
