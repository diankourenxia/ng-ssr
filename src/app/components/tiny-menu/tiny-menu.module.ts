import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinyMenuComponent } from './tiny-menu.component';
@NgModule({
  declarations: [TinyMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [TinyMenuComponent]
})
export class TinyMenuModule { }
