import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsResultsComponent } from '../asResultsComponent';
import AsPeers from '../model/asPeers';

@Component({
  selector: 'app-as-downstreams-results',
  templateUrl: './as-downstreams-results.component.html',
  styleUrls: ['./as-downstreams-results.component.css']
})
export class AsDownstreamsResultsComponent extends AsResultsComponent<AsPeers> {

  getData(apiId?: Number, asNumber?: Number): Observable<AsPeers> {
    return this.asService.getAsDownstreams(apiId, asNumber);
  }

}
