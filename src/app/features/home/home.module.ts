import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
  ]
})
export class HomeModule { }
