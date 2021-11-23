import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import Api from '../model/api';

@Component({
  selector: 'app-api-selection',
  templateUrl: './api-selection.component.html',
  styleUrls: ['./api-selection.component.css']
})
export class ApiSelectionComponent implements OnInit {

  availableApis$!: Observable<Api[]>;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.availableApis$ = this.apiService.getAvailableApis();
  }

}
