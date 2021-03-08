import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { MainDataComponent } from './components/main-data/main-data.component';
import { HeroCharacteristicsComponent } from './components/hero-characteristics/hero-characteristics.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component'
import { PhysicalDescriptionComponent } from './components/physical-description/physical-description.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DetailComponent, 
    MainDataComponent,
    HeroCharacteristicsComponent,
    PersonalDataComponent,
    PhysicalDescriptionComponent   
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    TranslateModule
  ]
})
export class DetailModule { }
