import { Component, OnInit } from '@angular/core';
import { ApiProviderService } from '../api-provider.service';
import { AsService } from '../as.service';
import AsDetails from '../model/as-details';
import SelectedApi from '../model/selectedApi';
import { ParamsService } from '../params.service';

@Component({
  selector: 'app-as-details-results',
  templateUrl: './as-details-results.component.html',
  styleUrls: ['./as-details-results.component.css']
})
export class AsDetailsResultsComponent implements OnInit {

  asesDetails: [SelectedApi, AsDetails][];

  constructor(
    private paramsService: ParamsService,
    private apiProvider: ApiProviderService,
    private asService: AsService
    ) { 
      this.asesDetails = [];
    }

  ngOnInit(): void {
    this.execute();
  }

  execute(): void {
    let asNumber = Number(this.paramsService.getQueryParam());
    let apisToQuery = this.apiProvider.getSelectedApis();
    apisToQuery.forEach(api => {
      this.asService.getAsDetails(api.api?.id, Number(asNumber)).subscribe(
        x => this.asesDetails?.push([api, x])
      )
    });
  }
}
