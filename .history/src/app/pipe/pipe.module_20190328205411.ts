import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BypassSecurityTrustHtmlPipe} from './trustHtml';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[BypassSecurityTrustHtmlPipe]
})
export class PipeModule { }
