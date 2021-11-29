import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProviderService } from '../api-provider.service';
import { ApiService } from '../api.service';
import SelectedApi from '../model/selectedApi';
import { ParamsService } from '../params.service';

@Component({
  selector: 'app-api-selection',
  templateUrl: './api-selection.component.html',
  styleUrls: ['./api-selection.component.css']
})
export class ApiSelectionComponent implements OnInit {

  availableApis: SelectedApi[];
  checkAll: boolean;

  constructor(
    private apiService:ApiService, 
    private apiProviderService: ApiProviderService,
    private paramsService: ParamsService,
    private router: Router) {
      this.availableApis = [];
      this.checkAll = false;
   }

  ngOnInit(): void {
    this.apiService.getAvailableApis().subscribe(x => x.forEach(
      y => this.availableApis?.push(
        {
          selected: false,
          api: y
        }
      )
    ));
  }

  checkAllApis(): void {
    this.availableApis?.forEach(api => api.selected = this.checkAll);
  }

  go():void {
      
    try {
        this.apiProviderService.setApis(this.availableApis);
        this.router.navigateByUrl(this.paramsService.getUrl());
    } catch (error) {
        alert(error);
    }     
  }
}
