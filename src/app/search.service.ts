import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Search from './model/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  go(apiId?: Number, queryTerm?: string):Observable<Search> {
      return of({
        relatedAsns: [
          {
            emailContacts: [],
            abuseContacts: [],
            asn: 53181,
            name: "K2 Telecom e Multimidia LTDA ME",
            description: "K2 Telecom e Multimidia LTDA ME",
            countryCode: "null"
          }
        ],
        iPv4: [
          {
            prefix: "191.241.64.0/20",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.64.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.65.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.66.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.68.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.68.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.69.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.72.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.72.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.73.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.74.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.74.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.75.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.76.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.78.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.78.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "191.241.79.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.160.0/20",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.160.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.160.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.161.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.164.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.165.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.166.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.166.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.167.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.168.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.169.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.170.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.170.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.172.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.173.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.174.0/23",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.174.0/24",
            name: "",
            description: ""
          },
          {
            prefix: "201.33.175.0/24",
            name: "",
            description: ""
          }
        ],
        iPv6: [
          {
            prefix: "2804:113c::/32",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:8000::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:8400::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:8800::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:8c00::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:9000::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:9400::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:9800::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:9c00::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:a000::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:a400::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:a800::/38",
            name: "",
            description: ""
          },
          {
            prefix: "2804:113c:fc00::/38",
            name: "",
            description: ""
          }
        ]
      });
  }
}
