import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsDataQueryComponent } from './as-data-query/as-data-query.component';
import { PrefixQueryComponent } from './prefix-query/prefix-query.component';
import { IpQueryComponent } from './ip-query/ip-query.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiSelectionComponent } from './api-selection/api-selection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsDetailsComponent } from './as-details/as-details.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
