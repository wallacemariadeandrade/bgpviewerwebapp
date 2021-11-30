import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiSelectionComponent } from './api-selection/api-selection.component';
import { AsDetailsResultsComponent } from './as-details-results/as-details-results.component';
import { AsPeersResultsComponent } from './as-peers-results/as-peers-results.component';
import { AsUpstreamsResultsComponent } from './as-upstreams-results/as-upstreams-results.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'apiSelection', component: ApiSelectionComponent },
  { path: 'as-details', component: AsDetailsResultsComponent },
  { path: 'as-peers', component: AsPeersResultsComponent },
  { path: 'as-upstreams', component: AsUpstreamsResultsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }