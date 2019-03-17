import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRouter: Routes = [{
  path: '', redirectTo: '/main/list', pathMatch: 'full',
},
{
  path: 'main', loadChildren: './main/main.module#MainModule'
},
{
  path: 'input', loadChildren: './input/input.module#InputModule'
},
{
  path: 'login', component: LoginComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
