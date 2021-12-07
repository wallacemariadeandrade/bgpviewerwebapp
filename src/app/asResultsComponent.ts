import { Component } from "@angular/core";
import { catchError, Observable, timeout } from "rxjs";
import { ApiProviderService } from "./api-provider.service";
import { AsService } from "./as.service";
import SelectedApi from "./model/selectedApi";
import { ParamsService } from "./params.service";
import { ResultsComponent } from "./resultsComponent";

@Component ({
    template: ''
})
export abstract class AsResultsComponent<T> extends ResultsComponent<T> {

    asNumber?: Number;

    constructor(
        paramsService: ParamsService,
        apiProvider: ApiProviderService,
        protected asService: AsService) {
            super(paramsService, apiProvider)
            this.asNumber = Number(this.paramsService.getQueryParam());
    }

    doWork(selectedApis: SelectedApi[]):void {
        this.asNumber = Number(this.paramsService.getQueryParam());
        selectedApis.forEach(selected => {
            this.getData(selected.api?.id, Number(this.asNumber)).pipe(
                timeout({ each: this.RESULTS_TIMEOUT_MILLISECONDS })
            )
            .pipe(
                catchError(e => this.handle(e))
            ).subscribe(x => {
                this.unsetLoading();
                this.results?.push([selected, x]);
            })
        });
    }

    abstract getData(apiId?: Number, asNumber?: Number):Observable<T>;
}