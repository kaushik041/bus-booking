import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BusBookingService} from '../../bus-booking.service'
@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrls: ['./view-bus.component.css']
})
export class ViewBusComponent implements OnInit {

  bus : any;
  constructor(public BusBookingService: BusBookingService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getBus(this.route.snapshot.paramMap.get('id'));
  }

  getBus(id: string): void {
    this.BusBookingService.getBusById(id)
      .subscribe(
        data => {
          this.bus = data;
        },
        error => {
          console.log(error);
        });
  }
  
}
