import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProviderService } from '../api-provider.service';
import { ApiService } from '../api.service';
import SelectedApi from '../model/selectedApi';

@Component({
  selector: 'app-api-selection',
  templateUrl: './api-selection.component.html',
  styleUrls: ['./api-selection.component.css']
})
export class ApiSelectionComponent implements OnInit {

  selectedApis: SelectedApi[];
  checkAll: boolean;

  constructor(
    private apiService:ApiService, 
    private activeRoute: ActivatedRoute,
    private apiProviderService: ApiProviderService,
    private router: Router) {
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

  checkAllApis(): void {
    this.selectedApis?.forEach(api => api.selected = this.checkAll);
  }

  go():void {
      // Discover url path
      let url = this.activeRoute.snapshot.url.map(x => x.path).join("/"); 

      if(url.includes('as')) {
        
        let as = this.activeRoute.snapshot.paramMap.get('as');
        
        if(url.includes('details')) {
          // set selected apis into shared service
          this.apiProviderService.appendApi(this.selectedApis)
          // route to as details view
          this.router.navigateByUrl(`${as}/details`);
        } else if (url.includes('peers'))
          alert('as details peers!');
        else if (url.includes('upstreams'))
          alert('as details upstreams!');
        else if (url.includes('downstreams'))
          alert('as details downstreams!');
        else if (url.includes('ixs'))
          alert('as details ixs!');
        else if (url.includes('prefixes'))
          alert('as details prefixes!');
        
      } else if (url.includes('prefix')) {
        alert ('prefix query!');
      } else if (url.includes('ip')) {
        alert ('ip query!');
      } else {
        alert ('search query!')
      }
  }

  test():void {
    let names = this.selectedApis?.filter(x => x.selected).map(x => x.api?.name);
    alert(`selected apis were ${names?.join(",")}`);
  }
}
