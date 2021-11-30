import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsResultsComponent } from '../asResultsComponent';
import AsIx from '../model/asIx';

@Component({
  selector: 'app-as-ixs-results',
  templateUrl: './as-ixs-results.component.html',
  styleUrls: ['./as-ixs-results.component.css']
})
export class AsIxsResultsComponent extends AsResultsComponent<AsIx[]> {
  
  getData(apiId?: Number, asNumber?: Number): Observable<AsIx[]> {
    return this.asService.getAsIxs(apiId, asNumber);
  }

}
