import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CardListComponent } from './card-list/card-list.component';
import { RequestService } from '../../core/services/request.service';
import { FilterNamesPipe } from '../../shared/pipes/filter-names.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ListComponent, 
    CardListComponent,
    FilterNamesPipe
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    TranslateModule
  ],
  providers: [RequestService]
})
export class ListModule { }
