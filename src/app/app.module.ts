import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AsDataQueryComponent } from './as-data-query/as-data-query.component';
import { PrefixQueryComponent } from './prefix-query/prefix-query.component';
import { IpQueryComponent } from './ip-query/ip-query.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiSelectionComponent } from './api-selection/api-selection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsDetailsComponent } from './as-details/as-details.component';
import { FormsModule } from "@angular/forms";
import { ApiProviderService } from './api-provider.service';
import { AsDetailsResultsComponent } from './as-details-results/as-details-results.component';
import { ParamsService } from './params.service';
import { AsPeersComponent } from './as-peers/as-peers.component';
import { AsPeersResultsComponent } from './as-peers-results/as-peers-results.component';
import { AsUpstreamsComponent } from './as-upstreams/as-upstreams.component';
import { AsUpstreamsResultsComponent } from './as-upstreams-results/as-upstreams-results.component';
import { AsDownstreamsComponent } from './as-downstreams/as-downstreams.component';
import { AsDownstreamsResultsComponent } from './as-downstreams-results/as-downstreams-results.component';
import { AsIxsComponent } from './as-ixs/as-ixs.component';
import { AsIxsResultsComponent } from './as-ixs-results/as-ixs-results.component';
import { AsPrefixesComponent } from './as-prefixes/as-prefixes.component';
import { AsPrefixesResultsComponent } from './as-prefixes-results/as-prefixes-results.component';
import { PrefixDetailsComponent } from './prefix-details/prefix-details.component';
import { PrefixDetailsResultsComponent } from './prefix-details-results/prefix-details-results.component';
import { IpDetailsComponent } from './ip-details/ip-details.component';
import { IpDetailsResultsComponent } from './ip-details-results/ip-details-results.component';
import { SearchForComponent } from './search-for/search-for.component';
import { SearchForResultsComponent } from './search-for-results/search-for-results.component';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    AsDataQueryComponent,
    PrefixQueryComponent,
    IpQueryComponent,
    SearchComponent,
    ApiSelectionComponent,
    DashboardComponent,
    AsDetailsComponent,
    AsDetailsResultsComponent,
    AsPeersComponent,
    AsPeersResultsComponent,
    AsUpstreamsComponent,
    AsUpstreamsResultsComponent,
    AsDownstreamsComponent,
    AsDownstreamsResultsComponent,
    AsIxsComponent,
    AsIxsResultsComponent,
    AsPrefixesComponent,
    AsPrefixesResultsComponent,
    PrefixDetailsComponent,
    PrefixDetailsResultsComponent,
    IpDetailsComponent,
    IpDetailsResultsComponent,
    SearchForComponent,
    SearchForResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  // Register as a shared service! Singleton instance!
  providers: [ApiProviderService, ParamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
