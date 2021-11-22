import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import Api from '../model/api';

@Component({
  selector: 'app-available-apis',
  templateUrl: './available-apis.component.html',
  styleUrls: ['./available-apis.component.css']
})
export class AvailableApisComponent implements OnInit {

  availableApis$!: Observable<Api[]>;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.availableApis$ = this.apiService.getAvailableApis();
  }

}
