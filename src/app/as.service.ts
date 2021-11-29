import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import AsDetails from './model/asDetails';
import AsPeers from './model/asPeers';

@Injectable({
  providedIn: 'root'
})
export class AsService {

  constructor() { }

  getAsDetails(apiId?: Number, asNumber?: Number):Observable<AsDetails> {
    return of({
        asn: 3356,
        name: "LEVEL3",
        description: "Level 3 Parent, LLC",
        countryCode: "US",
        emailContacts: [
          "abuse@aup.lumen.com",
          "ipaddressing@level3.com",
          "abuse@level3.com"
        ],
        abuseContacts: [
          "abuse@aup.lumen.com",
          "abuse@level3.com"
        ],
        lookingGlassUrl: "https://lookingglass.centurylink.com/"
    });
  }

  getAsPeers(apiId?: Number, asNumber?: Number):Observable<AsPeers> {
    return of({
      ipv4: [
        {
          asn: 3356,
          name: "Level3",
          description: "Level3",
          countryCode: "US"
        },
        {
          asn: 3356,
          name: "Level3",
          description: "Level3",
          countryCode: "US"
        }
      ],
      ipv6: [
        {
          asn: 3356,
          name: "Level3",
          description: "Level3",
          countryCode: "US"
        },
        {
          asn: 3356,
          name: "Level3",
          description: "Level3",
          countryCode: "US"
        }
      ]
    });
  }
}
