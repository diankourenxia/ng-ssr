import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { PreCodeComponent } from '../components/pre-code/pre-code.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const mainRoutes: Routes = [
  {
    path: 'detail', component: DetailComponent
  },
  {
    path: '', component: ListComponent
  }
];
@NgModule({
  declarations: [MainComponent, PreCodeComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
