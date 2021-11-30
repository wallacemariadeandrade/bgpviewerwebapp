import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsResultsComponent } from '../asResultsComponent';
import AsPeers from '../model/asPeers';

@Component({
  selector: 'app-as-peers-results',
  templateUrl: './as-peers-results.component.html',
  styleUrls: ['./as-peers-results.component.css']
})
export class AsPeersResultsComponent extends AsResultsComponent<AsPeers> {
  
  getData(apiId?: Number, asNumber?: Number): Observable<AsPeers> {
    return this.asService.getAsPeers(apiId, asNumber);
  }  

}
