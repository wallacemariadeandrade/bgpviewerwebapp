import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ApiProviderService } from "./api-provider.service";
import { IpService } from "./ip.service";
import SelectedApi from "./model/selectedApi";
import { ParamsService } from "./params.service";
import { ResultsComponent } from "./resultsComponent";

@Component ({
    template: ''
})
export abstract class IpResultsComponent<T> extends ResultsComponent<T> {
    
    ip: string;

    constructor(
        paramsService: ParamsService,
        apiProvider: ApiProviderService,
        protected ipService: IpService) {
            super(paramsService, apiProvider);
            this.ip = this.paramsService.getQueryParam();
    }

    doWork(apisToQuery: SelectedApi[]):void {
        this.ip = this.paramsService.getQueryParam();
        apisToQuery.forEach(selected => {
            this.getData(selected.api?.id, this.ip).subscribe(x => {
                this.unsetLoading();
                this.results?.push([selected, x])
            })
        });
    }

    abstract getData(apiId?: Number, ip?: string):Observable<T>;
}