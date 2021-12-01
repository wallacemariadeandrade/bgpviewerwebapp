import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsResultsComponent } from '../asResultsComponent';
import AsPrefixes from '../model/asPrefixes';

@Component({
  selector: 'app-as-prefixes-results',
  templateUrl: './as-prefixes-results.component.html',
  styleUrls: ['./as-prefixes-results.component.css']
})
export class AsPrefixesResultsComponent extends AsResultsComponent<AsPrefixes> {
  
  getData(apiId?: Number, asNumber?: Number): Observable<AsPrefixes> {
    return this.asService.getAsPrefixes(apiId, asNumber);
  }

}
