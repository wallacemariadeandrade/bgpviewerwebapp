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

  private getAsDetailsEndpoint(apiId?: Number, asNumber?: Number):string {
    return `${environment.baseUrl}/${apiId}/as/${asNumber}/details`;
  }

  getAsDetails(apiId?: Number, asNumber?: Number):Observable<AsDetails> {
    return this.http.get<AsDetails>(this.getAsDetailsEndpoint(apiId, asNumber));
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

  getAsPrefixes(apiId?: Number, asNumber?: Number): Observable<AsPrefixes> {
    return of({
      asn: 15169,
      iPv4: [
        "8.8.8.0/24",
        "8.8.4.0/24",
      ],
      iPv6: [
        "2001:4860::/32",
        "2001:4860:4864::/48",
        "2404:6800::/32"
      ]
    });
  }
}
