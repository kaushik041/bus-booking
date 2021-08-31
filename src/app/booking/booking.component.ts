import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {BusBookingService} from './../bus-booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  isSubmitted = false;
  fromCity: any = ['Bengaluru', 'Hydrabad', 'Kolkata', 'Delhi', 'Mumbai'];
  toCity: any = ['Bengaluru', 'Hydrabad', 'Kolkata', 'Delhi', 'Mumbai'];
  Bus: any = [];
  SearchBus : any = [];
  bus: any;
  toLocation : any;
  fromlocation: any;
  constructor(public fb: FormBuilder, private route:Router, public BusBookingService: BusBookingService) { }

  bookingForm = this.fb.group({
    fromcityName: ['', [Validators.required]],
    tocityName: ['', [Validators.required]]

  })

  changeFromCity(e) {
    this.fromcityName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  changeToCity(e) {
    this.tocityName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get fromcityName() {
    return this.bookingForm.get('fromcityName');
  }
  get tocityName() {
    return this.bookingForm.get('tocityName');
  }
  ngOnInit(): void {
    this.fetchBuses();
  }
  fetchBuses() {
    return this.BusBookingService.getBuses().subscribe((res: {}) => {
      this.Bus = res;
      console.log(this.Bus);
    })
  }
  onSubmit() {
    this.isSubmitted = true;
    
    this.fromlocation = this.bookingForm.get('fromcityName').value;
    this.fromlocation = this.fromlocation.split(" ").splice(-1);
    let from_location = this.fromlocation.toString();

    this.toLocation = this.bookingForm.get('tocityName').value;
    this.toLocation = this.toLocation.split(" ").splice(-1);
    let to_location = this.toLocation.toString();

    if (!this.bookingForm.valid) {
      return false;
    } else {
      console.log("locations",from_location,to_location);
        return this.BusBookingService.getBuses().subscribe((res: {}) => {
          this.Bus = res;
          this.SearchBus = this.Bus.filter(to => to.from === from_location && to.to === to_location);
          console.log(this.SearchBus);
        })
    }

  }
}
