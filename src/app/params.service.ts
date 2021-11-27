import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

// Shared
@Injectable()

export class ParamsService {

  url: string;
  queryParam: string

  constructor() {
    this.url = "";
    this.queryParam = "";
   }

  setUrl(url:string) {
    this.url = url;
  }

  getUrl() { 
    return this.url;
  }

  setQueryParam(param: string) {
    this.queryParam = param;
  }

  getQueryParam() {
    return this.queryParam;
  }
}
