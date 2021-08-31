import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

export class Bus {
  id: string;
  model: string;
  time: string;
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

  // getBuses(id): Observable<Bus> {
  //   return this.httpClient.get<Bus>(endpoint)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  getBuses() {
    return this.httpClient.get<Bus[]>(endpoint);
  }

  getBusById(id: string) {
    console.log(id);
    return this.httpClient.get<Bus>(`${endpoint}/${id}`);
}

  processError(err) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(message);
 }
}
