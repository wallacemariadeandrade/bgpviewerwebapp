import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import Swal from "sweetalert2";
import { ApiProviderService } from "./api-provider.service";
import SelectedApi from "./model/selectedApi";
import { ParamsService } from "./params.service";

@Component({
    template: ''
})
export abstract class ResultsComponent<T> implements OnInit {
    
    results: [SelectedApi, T][];
    isLoading: boolean;
    isLoadingCounter: number;
    RESULTS_TIMEOUT_MILLISECONDS: number = 20000;

    constructor(
        protected paramsService: ParamsService,
        protected apiProvider: ApiProviderService) {
            this.results = [];
            this.isLoading = true;
            this.isLoadingCounter = this.results.length;
    }


    ngOnInit(): void {
        this.execute();
    }

    execute():void {
        let apisToQuery = this.apiProvider.getSelectedApis();
        this.isLoadingCounter = apisToQuery.length;
        this.doWork(apisToQuery);
    }    

    unsetLoading():void {
        this.isLoadingCounter--;
        if(this.isLoadingCounter == 0) {
            this.isLoading = false;
        } 
    }

    handle(error: HttpErrorResponse):Observable<T> {
        this.isLoading = false;
        Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: error.status == 500 ? `Remote server error (${error.status})` : error.message
          });
        return of();
    }

    abstract doWork(selectedApis: SelectedApi[]):void;
}