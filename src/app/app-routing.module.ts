import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiSelectionComponent } from './api-selection/api-selection.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'apiSelection', component: ApiSelectionComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }