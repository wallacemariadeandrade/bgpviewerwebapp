import { Component, Input, OnInit } from '@angular/core';
import IpDetails from '../model/ipDetails';

@Component({
  selector: 'app-ip-details',
  templateUrl: './ip-details.component.html',
  styleUrls: ['./ip-details.component.css']
})
export class IpDetailsComponent implements OnInit {

  @Input() ip?: IpDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
