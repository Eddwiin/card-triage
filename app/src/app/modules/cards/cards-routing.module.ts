import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from '@ct-core/configs/paths.config';
import { CardsListContainerComponent } from './cards-list-container/cards-list-container.component';

const routes: Routes = [
  {
    path: Paths.CardsList,
    component: CardsListContainerComponent
  },
  {
    path: '',
    redirectTo: `/${Paths.CardsList}`,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
