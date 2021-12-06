import { Component, OnInit } from '@angular/core';
import { ApiProviderService } from '../api-provider.service';
import Search from '../model/search';
import SelectedApi from '../model/selectedApi';
import { ParamsService } from '../params.service';
import { ResultsComponent } from '../resultsComponent';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-for-results',
  templateUrl: './search-for-results.component.html',
  styleUrls: ['./search-for-results.component.css']
})
export class SearchForResultsComponent extends ResultsComponent<Search> {

  term: string;

  constructor(
    paramsService: ParamsService,
    apiProvider: ApiProviderService,
    protected searchService: SearchService) {
        super(paramsService, apiProvider);
        this.term = this.paramsService.getQueryParam();
  }

  doWork(apisToQuery: SelectedApi[]):void {
    this.term = this.paramsService.getQueryParam();
    apisToQuery.forEach(selected => {
        this.searchService.go(selected.api?.id, this.term).subscribe(x => {
          this.unsetLoading();
          this.results?.push([selected, x]);
        })
    });
  }
}