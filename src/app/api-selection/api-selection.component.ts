import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import Swal from 'sweetalert2';
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
  isLoading: boolean;

  constructor(
    private apiService:ApiService, 
    private apiProviderService: ApiProviderService,
    private paramsService: ParamsService,
    private router: Router) {
      this.availableApis = [];
      this.checkAll = false;
      this.isLoading = false;
   }

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getAvailableApis().pipe(
      catchError(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "An error has ocurred while fetching data!"
        });
        return of([]);
      })
    ).subscribe(x => {
      this.isLoading = false;
      x.forEach(y => this.availableApis?.push({
          selected: false,
          api: y
        })
      )}
    );
  }

  checkAllApis(): void {
    this.availableApis?.forEach(api => api.selected = this.checkAll);
  }

  go():void {
      
    try {
        this.apiProviderService.setApis(this.availableApis);
        this.router.navigateByUrl(this.paramsService.getUrl());
    } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: String(error)
        });
    }     
  }
}