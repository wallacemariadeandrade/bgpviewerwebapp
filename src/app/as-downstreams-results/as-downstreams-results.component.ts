import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiProviderService } from '../api-provider.service';
import { AsService } from '../as.service';
import { AsResultsComponent } from '../asResultsComponent';
import AsPeers from '../model/asPeers';
import { ParamsService } from '../params.service';

@Component({
  selector: 'app-as-downstreams-results',
  templateUrl: './as-downstreams-results.component.html',
  styleUrls: ['./as-downstreams-results.component.css']
})
export class AsDownstreamsResultsComponent extends AsResultsComponent<AsPeers> {

  constructor(paramsService: ParamsService, apiProvider: ApiProviderService, private asService: AsService) {
    super(paramsService, apiProvider);  
  }

  getData(apiId?: Number, asNumber?: Number): Observable<AsPeers> {
    return this.asService.getAsDownstreams(apiId, asNumber);
  }
}
