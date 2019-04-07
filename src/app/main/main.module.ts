import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { PreCodeComponent } from '../components/pre-code/pre-code.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { DoorComponent } from './door/door.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import {PipeModule} from '../pipe/pipe.module';
import {TinyMenuModule} from '../components/tiny-menu/tiny-menu.module';
const mainRoutes: Routes = [
  {
    path: '', component: MainComponent, data: { title: 'door' },
    children: [
      {
        path: 'detail/:title', component: DetailComponent, data: { title: 'detail' }
      },
      {
        path: 'list', component: ListComponent, data: { title: 'list' }
      },
      {
        path: 'life', component: DetailComponent, data: { title: 'life' }
      },
    ]
  }
];
@NgModule({
  declarations: [
    MainComponent, CardListComponent, LayoutComponent, PreCodeComponent, ListComponent, DetailComponent, DoorComponent],
  imports: [
    CommonModule,
    PipeModule,
    TinyMenuModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
