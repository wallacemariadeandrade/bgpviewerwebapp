import { Component, OnInit } from '@angular/core';
import { ApiProviderService } from '../api-provider.service';
import Search from '../model/search';
import SelectedApi from '../model/selectedApi';
import { ParamsService } from '../params.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-for-results',
  templateUrl: './search-for-results.component.html',
  styleUrls: ['./search-for-results.component.css']
})
export class SearchForResultsComponent implements OnInit {

  results: [SelectedApi, Search][];
  term: string;

  constructor(
    protected paramsService: ParamsService,
    protected apiProvider: ApiProviderService,
    protected searchService: SearchService) {
        this.results = [];
        this.term = this.paramsService.getQueryParam();
  }

  ngOnInit(): void {
    this.execute();
  }

  execute():void {
    this.term = this.paramsService.getQueryParam();
    let apisToQuery = this.apiProvider.getSelectedApis();
    apisToQuery.forEach(selected => {
        this.searchService.go(selected.api?.id, this.term).subscribe(
            x => this.results?.push([selected, x]))
    });
  }
}
