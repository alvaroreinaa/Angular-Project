import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeInformationComponent } from './components/home-information/home-information.component';
import { HomePlotComponent } from './components/home-plot/home-plot.component';
import { HomeFunctioningComponent } from './components/home-functioning/home-functioning.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeComponent, 
    HomeInformationComponent, 
    HomePlotComponent, 
    HomeFunctioningComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule
  ]
})
export class HomeModule { }
