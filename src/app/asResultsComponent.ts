import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiProviderService } from "./api-provider.service";
import { AsService } from "./as.service";
import SelectedApi from "./model/selectedApi";
import { ParamsService } from "./params.service";

@Component ({
    template: ''
})
export abstract class AsResultsComponent<T> implements OnInit {

    results: [SelectedApi, T][];
    asNumber?: Number;

    constructor(
        protected paramsService: ParamsService,
        protected apiProvider: ApiProviderService,
        protected asService: AsService) {
            this.results = [];
            this.asNumber = Number(this.paramsService.getQueryParam());
    }
    
    ngOnInit(): void {
        this.execute();
    }

    execute():void {
        this.asNumber = Number(this.paramsService.getQueryParam());
        let apisToQuery = this.apiProvider.getSelectedApis();
        apisToQuery.forEach(selected => {
            this.getData(selected.api?.id, Number(this.asNumber)).subscribe(
                x => this.results?.push([selected, x]))
        });
    }

    abstract getData(apiId?: Number, asNumber?: Number):Observable<T>;
}