import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import AsDetails from './model/asDetails';
import AsIx from './model/asIx';
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

  getAsUpstreams(apiId?: Number, asNumber?: Number): Observable<AsPeers> {
    return of({
      ipv4: [
        {
          asn: 174,
          name: "Cogent",
          description: "Cogent",
          countryCode: "US"
        },
        {
          asn: 174,
          name: "Cogent",
          description: "Cogent",
          countryCode: "US"
        }
      ],
      ipv6: [
        {
          asn: 20940,
          name: "Akamai Technologies",
          description: "Akamai Technologies",
          countryCode: "US"
        },
        {
          asn: 20940,
          name: "Akamai Technologies",
          description: "Akamai Technologies",
          countryCode: "US"
        }
      ]
    });
  }

  getAsDownstreams(apiId?: Number, asNumber?: Number): Observable<AsPeers> {
    return of({
      ipv4: [
        {
          asn: 174,
          name: "Cogent",
          description: "Cogent",
          countryCode: "US"
        },
        {
          asn: 174,
          name: "Cogent",
          description: "Cogent",
          countryCode: "US"
        }
      ],
      ipv6: [
        {
          asn: 20940,
          name: "Akamai Technologies",
          description: "Akamai Technologies",
          countryCode: "US"
        },
        {
          asn: 20940,
          name: "Akamai Technologies",
          description: "Akamai Technologies",
          countryCode: "US"
        }
      ]
    });
  }

  getAsIxs(apiId?: Number, asNumber?: Number): Observable<AsIx[]> {
    return of([
      {
        name: "IX.br (PTT.br) São Paulo",
        fullName: "IX.br (PTT.br) São Paulo",
        countryCode: "BR",
        iPv4: "187.16.222.222",
        iPv6: "2001:12f8::222:222",
        asnSpeed: 100000
      },
      {
        name: "IX.br (PTT.br) São Paulo",
        fullName: "IX.br (PTT.br) São Paulo",
        countryCode: "BR",
        iPv4: "187.16.212.67",
        iPv6: "2001:12f8::212:67",
        asnSpeed: 100000
      }
    ]);
  }
}
