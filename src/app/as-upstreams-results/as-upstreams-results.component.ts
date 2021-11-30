import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsResultsComponent } from '../asResultsComponent';
import AsPeers from '../model/asPeers';

@Component({
  selector: 'app-as-upstreams-results',
  templateUrl: './as-upstreams-results.component.html',
  styleUrls: ['./as-upstreams-results.component.css']
})
export class AsUpstreamsResultsComponent extends AsResultsComponent<AsPeers> {
  
  getData(apiId?: Number, asNumber?: Number): Observable<AsPeers> {
    return this.asService.getAsUpstreams(apiId, asNumber);
  }

}
