import { Component, OnInit } from "@angular/core";
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

    abstract doWork(selectedApis: SelectedApi[]):void;
}