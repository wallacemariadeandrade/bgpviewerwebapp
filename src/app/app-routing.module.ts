import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiSelectionComponent } from './api-selection/api-selection.component';
import { AsDetailsComponent } from './as-details/as-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'as/:as/details', component: ApiSelectionComponent },
  { path: 'as/:as/peers', component: ApiSelectionComponent },
  { path: 'as/:as/upstreams', component: ApiSelectionComponent },
  { path: 'as/:as/downstreams', component: ApiSelectionComponent },
  { path: 'as/:as/ixs', component: ApiSelectionComponent },
  { path: 'as/:as/prefixes', component: ApiSelectionComponent },
  { path: ':as/details', component: AsDetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }