import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BusBookingService } from '../bus-booking.service';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
})
export class BookingModule { }
