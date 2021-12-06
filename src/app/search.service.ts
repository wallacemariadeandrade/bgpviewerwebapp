import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import Search from './model/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  go(apiId?: Number, queryTerm?: string):Observable<Search> {
    return this.http.get<Search>(`${environment.baseUrl}/${apiId}/search/${queryTerm}`);
  }
}