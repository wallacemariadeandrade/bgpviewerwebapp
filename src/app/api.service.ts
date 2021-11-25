import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Api from './model/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getAvailableApis(): Observable<Api[]>{
    return of([
      {
        id: 1,
        name: "BGP View API",
        description: "BGPView is a simple API allowing consumers to view all sort of analytics data about the current state and structure of the internet. Available at https://bgpview.docs.apiary.io/#"
      },
      {
        id: 2,
        name: "BGP He API",
        description: "A tool from Hurricane Eletric to query information about internet. Available at https://bgp.he.net/"
      }
    ]);
  }
}
