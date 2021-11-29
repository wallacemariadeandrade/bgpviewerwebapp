import { Router } from "@angular/router";

export abstract class QueryComponent {

    constructor(protected router:Router) { }

    abstract checkInput(): boolean;
    abstract inputInvalid(): string;

    navigateTo(url: string):void {
        if(this.checkInput()) 
            this.router.navigateByUrl(url);
        else
            alert(this.inputInvalid());
    }
}