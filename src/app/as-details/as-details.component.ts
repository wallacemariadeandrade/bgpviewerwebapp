import { Component, OnInit } from '@angular/core';
import AsDetails from '../model/as-details';

@Component({
  selector: 'app-as-details',
  templateUrl: './as-details.component.html',
  styleUrls: ['./as-details.component.css']
})
export class AsDetailsComponent implements OnInit {

  details: AsDetails = {
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
  };

  constructor() { }

  ngOnInit(): void {
  }

}
