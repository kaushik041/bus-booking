import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormModule } from './user-form/user-form.module';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { ViewBusModule } from './view-bus/view-bus.module';


const routes: Routes = [
  {
    path:'',
    redirectTo:'booking',
    pathMatch: 'full',
  },
  {
    path:'booking', component:BookingComponent
  },
  {path:'view/:id', loadChildren:'./view-bus/view-bus.module#ViewBusModule'},
  {path:'user-form', loadChildren:'./user-form/user-form.module#UserFormModule'}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
