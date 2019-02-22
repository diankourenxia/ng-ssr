import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { PreCodeComponent } from '../components/pre-code/pre-code.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { DoorComponent } from './door/door.component';
const mainRoutes: Routes = [
  {
    path: 'detail/:title', component: DetailComponent, data: { title: 'detail' }
  },
  {
    path: 'list', component: ListComponent, data: { title: 'list' }
  },
  {
    path: 'life', component: DetailComponent, data: { title: 'life' }
  },
  {
    path: '', component: DoorComponent, data: { title: 'door' }
  }
];
@NgModule({
  declarations: [MainComponent, PreCodeComponent, ListComponent, DetailComponent, DoorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
