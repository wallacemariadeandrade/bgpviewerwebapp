import { Component } from "@angular/core";
import { catchError, Observable, timeout } from "rxjs";
import { ApiProviderService } from "./api-provider.service";
import SelectedApi from "./model/selectedApi";
import { ParamsService } from "./params.service";
import { PrefixService } from "./prefix.service";
import { ResultsComponent } from "./resultsComponent";

@Component ({
    template: ''
})
export abstract class PrefixResultsComponent<T> extends ResultsComponent<T> {
    
    prefix: string;

    constructor(
        paramsService: ParamsService,
        apiProvider: ApiProviderService,
        protected prefixService: PrefixService) {
            super(paramsService, apiProvider);
            this.prefix = this.paramsService.getQueryParam();
    }

    doWork(apisToQuery:SelectedApi[]):void {
        this.prefix = this.paramsService.getQueryParam();
        apisToQuery.forEach(selected => {
            this.getData(selected.api?.id, this.prefix).pipe(
                timeout({ each: this.RESULTS_TIMEOUT_MILLISECONDS })
            )
            .pipe(
                catchError(e => this.handle(e))
            ).subscribe(x => {
                this.unsetLoading();
                this.results?.push([selected, x])
            })
        });
    }

    abstract getData(apiId?: Number, prefix?: string):Observable<T>;
}