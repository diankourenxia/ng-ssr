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
import { TestFieldComponent } from './test-field/test-field.component';
import { TinyMenuModule } from './components/tiny-menu/tiny-menu.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestFieldComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    EditorModule,
    FormsModule,
    TinyMenuModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
