import { Component, OnInit } from '@angular/core';
import { QueryComponent } from "../queryComponent";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends QueryComponent implements OnInit {
  
  term:string = ""; 

  checkInput(): boolean {
    return true;
  }
  inputInvalid(): string {
    return "";
  }
  getParameter(): string {
    return this.term;
  }

  ngOnInit(): void {
  }

  go():void {
    this.goTo("search-results");
  }

}
