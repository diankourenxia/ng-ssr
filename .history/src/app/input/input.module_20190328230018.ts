import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input.component';
import { EditComponent } from './edit/edit.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ChooseListComponent } from '../components/choose-list/choose-list.component';
import {PipeModule} from '../pipe/pipe.module';
import * as Prism from '../../assets/js/prism.js';

const Route: Routes = [
  {
    path: 'edit/:title', component: EditComponent
  },
  {
    path: 'edit', component: EditComponent
  }
];
@NgModule({
  declarations: [InputComponent, EditComponent, ChooseListComponent],
  imports: [
    CommonModule,
    EditorModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Route)
  ]
})
export class InputModule { }
