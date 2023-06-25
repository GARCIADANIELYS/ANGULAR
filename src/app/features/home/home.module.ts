import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './components/about/about.component';
import { RequirementsComponent } from './components/requirements/requirements.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    RequirementsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    RequirementsComponent
  ]
})
export class HomeModule { }
