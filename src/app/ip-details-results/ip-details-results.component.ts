import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IpResultsComponent } from '../ipResultsComponent';
import IpDetails from '../model/ipDetails';

@Component({
  selector: 'app-ip-details-results',
  templateUrl: './ip-details-results.component.html',
  styleUrls: ['./ip-details-results.component.css']
})
export class IpDetailsResultsComponent extends IpResultsComponent<IpDetails> {
  
  getData(apiId?: Number, ip?: string): Observable<IpDetails> {
    return this.ipService.getIpDetails(apiId, ip);
  }

}
