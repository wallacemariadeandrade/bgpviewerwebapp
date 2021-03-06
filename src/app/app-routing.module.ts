import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiSelectionComponent } from './api-selection/api-selection.component';
import { AsDetailsResultsComponent } from './as-details-results/as-details-results.component';
import { AsDownstreamsResultsComponent } from './as-downstreams-results/as-downstreams-results.component';
import { AsIxsResultsComponent } from './as-ixs-results/as-ixs-results.component';
import { AsPeersResultsComponent } from './as-peers-results/as-peers-results.component';
import { AsPrefixesResultsComponent } from './as-prefixes-results/as-prefixes-results.component';
import { AsUpstreamsResultsComponent } from './as-upstreams-results/as-upstreams-results.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IpDetailsResultsComponent } from './ip-details-results/ip-details-results.component';
import { PrefixDetailsResultsComponent } from './prefix-details-results/prefix-details-results.component';
import { SearchForResultsComponent } from './search-for-results/search-for-results.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'api-selection', component: ApiSelectionComponent },
  { path: 'as-details', component: AsDetailsResultsComponent },
  { path: 'as-peers', component: AsPeersResultsComponent },
  { path: 'as-upstreams', component: AsUpstreamsResultsComponent },
  { path: 'as-downstreams', component: AsDownstreamsResultsComponent },
  { path: 'as-ixs', component: AsIxsResultsComponent },
  { path: 'as-prefixes', component: AsPrefixesResultsComponent },
  { path: 'prefix-details', component: PrefixDetailsResultsComponent },
  { path: 'ip-details', component: IpDetailsResultsComponent },
  { path: 'search-results', component: SearchForResultsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }