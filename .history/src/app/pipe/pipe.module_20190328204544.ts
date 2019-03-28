import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BypassSecurityTrustHtmlPipe} from './trustHtml';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BypassSecurityTrustHtmlPipe
  ]
})
export class PipeModule { }
