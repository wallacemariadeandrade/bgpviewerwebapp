import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import SelectedApi from '../model/selectedApi';

@Component({
  selector: 'app-api-selection',
  templateUrl: './api-selection.component.html',
  styleUrls: ['./api-selection.component.css']
})
export class ApiSelectionComponent implements OnInit {

  selectedApis?: SelectedApi[];
  checkAll: boolean;

  constructor(private apiService:ApiService) {
      this.selectedApis = [];
      this.checkAll = false;
   }

  ngOnInit(): void {
    this.apiService.getAvailableApis().subscribe(x => x.forEach(
      y => this.selectedApis?.push(
        {
          selected: false,
          api: y
        }
      )
    ));
  }

  test():void {
    let names = this.selectedApis?.filter(x => x.selected).map(x => x.api?.name);
    alert(`selected apis were ${names?.join(",")}`);
  }

  checkAllApis(): void {
    this.selectedApis?.forEach(api => api.selected = this.checkAll);
  }
}
