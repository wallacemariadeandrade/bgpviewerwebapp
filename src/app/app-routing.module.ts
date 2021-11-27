import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiSelectionComponent } from './api-selection/api-selection.component';
import { AsDetailsResultsComponent } from './as-details-results/as-details-results.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'apiSelection', component: ApiSelectionComponent },
  { path: 'as-details', component: AsDetailsResultsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }