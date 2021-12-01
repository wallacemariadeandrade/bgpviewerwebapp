import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiProviderService } from "./api-provider.service";
import SelectedApi from "./model/selectedApi";
import { ParamsService } from "./params.service";
import { PrefixService } from "./prefix.service";

@Component ({
    template: ''
})
export abstract class PrefixResultsComponent<T> implements OnInit {
    
    results: [SelectedApi, T][];
    prefix: string;

    constructor(
        protected paramsService: ParamsService,
        protected apiProvider: ApiProviderService,
        protected prefixService: PrefixService) {
            this.results = [];
            this.prefix = this.paramsService.getQueryParam();
    }

    ngOnInit(): void {
        this.execute();
    }

    execute():void {
        this.prefix = this.paramsService.getQueryParam();
        let apisToQuery = this.apiProvider.getSelectedApis();
        apisToQuery.forEach(selected => {
            this.getData(selected.api?.id, this.prefix).subscribe(
                x => this.results?.push([selected, x]))
        });
    }

    abstract getData(apiId?: Number, prefix?: string):Observable<T>;
}