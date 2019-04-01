import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BypassSecurityTrustHtmlPipe } from './trustHtml';
import { NormalDatePipe } from './normal-date.pipe';
@NgModule({
  declarations: [BypassSecurityTrustHtmlPipe, NormalDatePipe],
  imports: [
    CommonModule
  ],
  exports: [BypassSecurityTrustHtmlPipe  , NormalDatePipe]
})
export class PipeModule { }
