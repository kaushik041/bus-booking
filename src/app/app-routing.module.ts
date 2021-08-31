import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsModule } from './about-us/about-us.module';
import { BookingModule } from './booking/booking.module';
import { ContactUsModule } from './contact-us/contact-us.module';


const routes: Routes = [
  {
    path:'',
    redirectTo:'booking',
    pathMatch: 'full',
  },{
    path:'contact-us',
    loadChildren: './contact-us/contact-us.module#ContactUsModule'
  },{
    path:'booking',
    loadChildren: './booking/booking.module#BookingModule'
  },{
    path:'about-us',
    loadChildren: './about-us/about-us.module#AboutUsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
