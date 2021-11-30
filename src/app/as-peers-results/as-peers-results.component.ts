import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProviderService } from '../api-provider.service';
import { AsService } from '../as.service';
import { AsResultsComponent } from '../asResultsComponent';
import AsPeers from '../model/asPeers';
import { ParamsService } from '../params.service';

@Component({
  selector: 'app-as-peers-results',
  templateUrl: './as-peers-results.component.html',
  styleUrls: ['./as-peers-results.component.css']
})
export class AsPeersResultsComponent extends AsResultsComponent<AsPeers> {
  
  constructor(
    paramsService: ParamsService,
    apiProvider: ApiProviderService,
    private asService: AsService) {
    super(paramsService, apiProvider);
  }
  
  getData(apiId?: Number, asNumber?: Number): Observable<AsPeers> {
    return this.asService.getAsPeers(apiId, asNumber);
  }  
}
