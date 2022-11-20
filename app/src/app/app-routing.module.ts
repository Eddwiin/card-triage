import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paths } from '@ct-core/configs/paths.config';

const routes: Routes = [
  {
    path: Paths.Root,
    loadChildren: () => import('./modules/cards/cards.module').then(mod => mod.CardsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
