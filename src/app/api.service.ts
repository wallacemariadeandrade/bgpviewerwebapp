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
        name: "BGP View",
        description: "BGP View API"
      }
    ]);
  }
}
