import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import PrefixDetails from './model/prefixDetails';

@Injectable({
  providedIn: 'root'
})
export class PrefixService {

  constructor(private http:HttpClient) { }

  getPrefixDetails(apiId?: Number, prefix?: string):Observable<PrefixDetails> {
    return this.http.get<PrefixDetails>(`${environment.baseUrl}/${apiId}/prefix/${prefix}/details`);
  }
}
