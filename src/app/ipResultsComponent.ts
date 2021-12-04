import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiProviderService } from "./api-provider.service";
import { IpService } from "./ip.service";
import SelectedApi from "./model/selectedApi";
import { ParamsService } from "./params.service";

@Component ({
    template: ''
})
export abstract class IpResultsComponent<T> implements OnInit {
    
    results: [SelectedApi, T][];
    ip: string;

    constructor(
        protected paramsService: ParamsService,
        protected apiProvider: ApiProviderService,
        protected ipService: IpService) {
            this.results = [];
            this.ip = this.paramsService.getQueryParam();
    }

    ngOnInit(): void {
        this.execute();
    }

    execute():void {
        this.ip = this.paramsService.getQueryParam();
        let apisToQuery = this.apiProvider.getSelectedApis();
        apisToQuery.forEach(selected => {
            this.getData(selected.api?.id, this.ip).subscribe(
                x => this.results?.push([selected, x]))
        });
    }

    abstract getData(apiId?: Number, ip?: string):Observable<T>;
}