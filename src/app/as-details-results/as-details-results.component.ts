import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsResultsComponent } from '../asResultsComponent';
import AsDetails from '../model/asDetails';

@Component({
  selector: 'app-as-details-results',
  templateUrl: './as-details-results.component.html',
  styleUrls: ['./as-details-results.component.css']
})
export class AsDetailsResultsComponent extends AsResultsComponent<AsDetails> {

    getData(apiId?: Number, asNumber?: Number): Observable<AsDetails> {
      return this.asService.getAsDetails(apiId, asNumber);
    }

}
