import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import AsDetails from './model/asDetails';
import AsIx from './model/asIx';
import AsPeers from './model/asPeers';
import AsPrefixes from './model/asPrefixes';

@Injectable({
  providedIn: 'root'
})
export class AsService {

  constructor(private http: HttpClient) { }

  private getEndpoint(apiId?: Number, asNumber?: Number, endpoint?:string):string {
    return `${environment.baseUrl}/${apiId}/as/${asNumber}/${endpoint}`;
  }

  getAsDetails(apiId?: Number, asNumber?: Number):Observable<AsDetails> {
    return this.http.get<AsDetails>(this.getEndpoint(apiId, asNumber, 'details'));
  }

  getAsPeers(apiId?: Number, asNumber?: Number):Observable<AsPeers> {
    return this.http.get<AsPeers>(this.getEndpoint(apiId, asNumber, 'peers'));
  }

  getAsUpstreams(apiId?: Number, asNumber?: Number): Observable<AsPeers> {
    return this.http.get<AsPeers>(this.getEndpoint(apiId, asNumber, 'upstreams'));
  }

  getAsDownstreams(apiId?: Number, asNumber?: Number): Observable<AsPeers> {
    return this.http.get<AsPeers>(this.getEndpoint(apiId, asNumber, 'downstreams'));
  }

  getAsIxs(apiId?: Number, asNumber?: Number): Observable<AsIx[]> {
    return this.http.get<AsIx[]>(this.getEndpoint(apiId, asNumber, 'ixs'));
  }

  getAsPrefixes(apiId?: Number, asNumber?: Number): Observable<AsPrefixes> {
    return this.http.get<AsPrefixes>(this.getEndpoint(apiId, asNumber, 'prefixes'));
  }
}
