import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IpDetails from './model/ipDetails';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor() { }

  getIpDetails():Observable<IpDetails> {
    return of({
      ipAddress: "1.1.1.1",
      rirAllocationPrefix: "1.1.1.0/24",
      countryCode: "AU",
      ptrRecord: "one.one.one.one",
      relatedPrefixes: [
        {
          parentAsns: [
            {
              asn: 13335,
              name: "CLOUDFLARENET",
              description: "CLOUDFLARENET",
              countryCode: "US"
            }
          ],
          prefix: "1.1.1.0/24",
          name: "APNIC-LABS",
          description: "APNIC and Cloudflare DNS Resolver project"
        }
      ]
    });
  }
}
