import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import AsDetails from './model/as-details';

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
}
