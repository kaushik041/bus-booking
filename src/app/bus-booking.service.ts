import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

export class Bus {
  id: string;
  model: string;
  time: Date;
  from: string;
  to: string;
  seat: string;
}
const endpoint = 'http://localhost:3000/buses';
@Injectable({
  providedIn: 'root'
})
export class BusBookingService {

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getBuses() {
    return this.httpClient.get<Bus[]>(endpoint);
  }

  getBusById(id: string) {
    return this.httpClient.get<Bus>(`${endpoint}/${id}`);
}

}
