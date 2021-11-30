import { Router } from "@angular/router";
import Swal from "sweetalert2";

export abstract class QueryComponent {

    constructor(protected router:Router) { }

    abstract checkInput(): boolean;
    abstract inputInvalid(): string;

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
}