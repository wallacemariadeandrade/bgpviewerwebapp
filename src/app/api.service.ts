import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import Api from './model/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAvailableApis(): Observable<Api[]>{
    return this.http.get<Api[]>(`${environment.baseUrl}`);
    
    // return of([
    //   {
    //     id: 1,
    //     name: "BGP View API",
    //     description: "BGPView is a simple API allowing consumers to view all sort of analytics data about the current state and structure of the internet. Available at https://bgpview.docs.apiary.io/#"
    //   },
    //   {
    //     id: 2,
    //     name: "BGP He API",
    //     description: "A tool from Hurricane Eletric to query information about internet. Available at https://bgp.he.net/"
    //   }
    // ]);
  }
}
