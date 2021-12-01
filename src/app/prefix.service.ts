import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import PrefixDetails from './model/prefixDetails';

@Injectable({
  providedIn: 'root'
})
export class PrefixService {

  constructor() { }

  getPrefixDetails(apiId?: Number, prefix?: string):Observable<PrefixDetails> {
    return of({
      parentAsns: [
        {
          asn: 13335,
          name: "CLOUDFLARENET",
          description: "Cloudflare, Inc.",
          countryCode: "US"
        }
      ],
      prefix: "1.1.1.0/24",
      name: "APNIC-LABS",
      description: "APNIC and Cloudflare DNS Resolver project"
    })
  }
}
