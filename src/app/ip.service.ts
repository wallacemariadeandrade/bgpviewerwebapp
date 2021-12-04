import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IpDetails from './model/ipDetails';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor() { }

  getIpDetails(apiId?: Number, ip?: string):Observable<IpDetails> {
    return of({
      ipAddress: "8.8.8.8",
      rirAllocationPrefix: "8.0.0.0/9",
      countryCode: "US",
      ptrRecord: "dns.google",
      relatedPrefixes: [
        {
          parentAsns: [
            {
              asn: 15169,
              name: "GOOGLE",
              description: "GOOGLE",
              countryCode: "US"
            }
          ],
          prefix: "8.8.8.0/24",
          name: "LVLT-GOGL-8-8-8",
          description: "Google LLC"
        },
        {
          parentAsns: [
            {
              asn: 3356,
              name: "LEVEL3",
              description: "LEVEL3",
              countryCode: "US"
            }
          ],
          prefix: "8.0.0.0/12",
          name: "LVLT-ORG-8-8",
          description: "Level 3 Parent, LLC"
        },
        {
          parentAsns: [
            {
              asn: 3356,
              name: "LEVEL3",
              description: "LEVEL3",
              countryCode: "US"
            }
          ],
          prefix: "8.0.0.0/9",
          name: "LVLT-ORG-8-8",
          description: "Level 3 Parent, LLC"
        }
      ]
    });
  }
}
