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

  availableApis: SelectedApi[];
  checkAll: boolean;

  constructor(
    private apiService:ApiService, 
    private activeRoute: ActivatedRoute,
    private apiProviderService: ApiProviderService,
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
        
        // Discover url path
        let url = this.activeRoute.snapshot.url.map(x => x.path).join("/"); 

        if(url.includes('as')) {
          
          let as = this.activeRoute.snapshot.paramMap.get('as');
          
          if(url.includes('details')) {
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
        }
    } catch (error) {
        alert(error);
    }     
  }
}
