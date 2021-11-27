import { Injectable } from '@angular/core';
import SelectedApi from './model/selectedApi';

@Injectable()

// Shared service
export class ApiProviderService {

  private selectedApis: SelectedApi[];

  constructor() {
    this.selectedApis = [];
  }

  setApis(apis:SelectedApi[]):void {
    let selected = apis.filter(api => api.selected);
    if(selected.length < 1) throw new Error('At least 1 api must be selected.');
    this.selectedApis = apis.filter(api => api.selected);
  }

  getSelectedApis(): SelectedApi[] {
    return this.selectedApis;
  }
}
