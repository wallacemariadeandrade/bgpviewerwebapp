import { Injectable } from '@angular/core';
import SelectedApi from './model/selectedApi';

@Injectable()

// Shared service
export class ApiProviderService {

  private selectedApis: SelectedApi[];

  constructor() {
    this.selectedApis = [];
  }

  appendApi(apis:SelectedApi[]):void {
    this.selectedApis = this.selectedApis.concat(apis);
  }

  getApis(): SelectedApi[] {
    return this.selectedApis;
  }
}
