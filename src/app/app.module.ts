import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsDataQueryComponent } from './as-data-query/as-data-query.component';
import { PrefixQueryComponent } from './prefix-query/prefix-query.component';
import { IpQueryComponent } from './ip-query/ip-query.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { AvailableApisComponent } from './available-apis/available-apis.component';

@NgModule({
  declarations: [
    AppComponent,
    AsDataQueryComponent,
    PrefixQueryComponent,
    IpQueryComponent,
    SearchComponent,
    AvailableApisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
