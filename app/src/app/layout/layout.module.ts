import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...LayoutModule.LIST_COMPONENTS],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [...LayoutModule.LIST_COMPONENTS]
})
export class LayoutModule {
  static LIST_COMPONENTS = [
    HeaderComponent
  ]
}
