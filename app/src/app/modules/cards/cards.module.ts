import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsListContainerComponent } from './cards-list-container/cards-list-container.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardFilterComponent } from './card-filter/card-filter.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CardsListContainerComponent,
    CardContentComponent,
    CardFilterComponent,
    CardFilterComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule
  ]
})
export class CardsModule { }
