import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBusComponent } from './view-bus.component';


const routes: Routes = [
  {path:'', component:ViewBusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewBusRoutingModule { }
