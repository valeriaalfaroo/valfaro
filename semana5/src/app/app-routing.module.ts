import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{Semana5Component}from './semana5/semana5.component';

const routes: Routes = [
  {path:'semana5',component:Semana5Component}
  
  //{path:'', redirectTo:'/semana5',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
