import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {BypassSecurityTrustHtmlPipe} from './pipe/trustHtml';
registerLocaleData(en);
import * as hljs from 'highlight.js';
declare const require: any;
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
// alternatively if you only need to include a subset of languages
const hljs: any = require('highlight.js/lib/highlight');

hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
export function highlightJsFactory() {
  return hljs;
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BypassSecurityTrustHtmlPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
