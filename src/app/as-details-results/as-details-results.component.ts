import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProviderService } from '../api-provider.service';
import { AsService } from '../as.service';
import { AsResultsComponent } from '../asResultsComponent';
import AsDetails from '../model/asDetails';
import { ParamsService } from '../params.service';

@Component({
  selector: 'app-as-details-results',
  templateUrl: './as-details-results.component.html',
  styleUrls: ['./as-details-results.component.css']
})
export class AsDetailsResultsComponent extends AsResultsComponent<AsDetails> {

  constructor(
    paramsService: ParamsService,
    apiProvider: ApiProviderService,
    private asService: AsService
    ) { 
      super(paramsService, apiProvider);
    }

    getData(apiId?: Number, asNumber?: Number): Observable<AsDetails> {
      return this.asService.getAsDetails(apiId, asNumber);
    }
}
