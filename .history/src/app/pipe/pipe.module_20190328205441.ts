import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BypassSecurityTrustHtmlPipe } from './trustHtml';
@NgModule({
  declarations: [BypassSecurityTrustHtmlPipe],
  imports: [
    CommonModule
  ],
  exports: [BypassSecurityTrustHtmlPipe]
})
export class PipeModule { }
