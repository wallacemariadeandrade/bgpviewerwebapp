import { Component } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { ParamsService } from "./params.service";

@Component ({
    template: ''
})
export abstract class QueryComponent {

    constructor(protected router:Router, protected paramsService: ParamsService) { }

    navigateTo(url: string):void {
        if(this.checkInput()) 
            this.router.navigateByUrl(url);
        else
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: this.inputInvalid()
            });
    }

    goTo(url:string){ 
        this.paramsService.setUrl(url);
        this.paramsService.setQueryParam(this.getParameter());
        this.navigateTo('api-selection');
    }

    abstract checkInput(): boolean;
    abstract inputInvalid(): string;
    abstract getParameter(): string;
}