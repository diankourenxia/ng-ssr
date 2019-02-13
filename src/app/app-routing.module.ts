import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRouter: Routes = [{
  path: '', redirectTo: '/main', pathMatch: 'full'
}, {
  path: 'main', loadChildren: './main/main.module#MainModule'
}, {
  path: 'login', component: LoginComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
