import { Component, OnInit } from '@angular/core';
import { ApiProviderService } from '../api-provider.service';
import { AsService } from '../as.service';
import AsPeers from '../model/asPeers';
import SelectedApi from '../model/selectedApi';
import { ParamsService } from '../params.service';

@Component({
  selector: 'app-as-peers-results',
  templateUrl: './as-peers-results.component.html',
  styleUrls: ['./as-peers-results.component.css']
})
export class AsPeersResultsComponent implements OnInit {

  peersResults: [SelectedApi, AsPeers][];
  asNumber: Number;
  
  constructor(
    private paramsService: ParamsService,
    private apiProvider: ApiProviderService,
    private asService: AsService
  ) {
    this.peersResults = [];
    this.asNumber = 0;
  }

  ngOnInit(): void {
    this.execute();
  }

  execute(): void {
    this.asNumber = Number(this.paramsService.getQueryParam());
    let apisToQuery = this.apiProvider.getSelectedApis();
    apisToQuery.forEach(api => {
      this.asService.getAsPeers(api.api?.id, Number(this.asNumber)).subscribe(
        x => this.peersResults?.push([api, x]))
    });
  }
}
