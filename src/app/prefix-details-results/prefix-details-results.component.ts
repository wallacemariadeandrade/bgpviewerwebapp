import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import PrefixDetails from '../model/prefixDetails';
import { PrefixResultsComponent } from '../prefixResultsComponent';

@Component({
  selector: 'app-prefix-details-results',
  templateUrl: './prefix-details-results.component.html',
  styleUrls: ['./prefix-details-results.component.css']
})
export class PrefixDetailsResultsComponent extends PrefixResultsComponent<PrefixDetails> {
  
  getData(apiId?: Number, prefix?: string): Observable<PrefixDetails> {
    return this.prefixService.getPrefixDetails(apiId, prefix);
  }

}
