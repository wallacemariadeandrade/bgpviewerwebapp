import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import IpDetails from './model/ipDetails';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http:HttpClient) { }

  getIpDetails(apiId?: Number, ip?: string):Observable<IpDetails> {
    return this.http.get<IpDetails>(`${environment.baseUrl}/${apiId}/address/${ip}/details`);
  }
}