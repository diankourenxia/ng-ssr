import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BypassSecurityTrustHtmlPipe} from './trustHtml';
@NgModule({
  declarations: [BypassSecurityTrustHtmlPipe],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
