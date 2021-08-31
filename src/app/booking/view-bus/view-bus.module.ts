import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewBusRoutingModule } from './view-bus-routing.module';
import { ViewBusComponent } from './view-bus.component';


@NgModule({
  declarations: [ViewBusComponent],
  imports: [
    CommonModule,
    ViewBusRoutingModule
  ]
})
export class ViewBusModule { }
