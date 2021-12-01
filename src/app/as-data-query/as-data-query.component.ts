import { Component, Input, OnInit } from '@angular/core';
import { QueryComponent } from '../queryComponent';

@Component({
  selector: 'app-as-data-query',
  templateUrl: './as-data-query.component.html',
  styleUrls: ['./as-data-query.component.css']
})
export class AsDataQueryComponent extends QueryComponent implements OnInit {
  
  @Input() asNumber!: Number;

  ngOnInit(): void { }

  checkInput():boolean {
    return this.asNumber != null && this.asNumber != undefined && !isNaN(Number(this.asNumber));
  }

  getParameter(): string {
    return this.asNumber?.toString();
  }

  inputInvalid():string {
    return "Enter a valid AS number please!";
  }

  details():void {
    this.goTo('as-details');
  }

  peers():void {
    this.goTo('as-peers');
  }

  upstreams():void {
    this.goTo('as-upstreams');
  }

  downstreams():void {
    this.goTo('as-downstreams');
  }

  ixs():void {
    this.goTo('as-ixs');
  }

  prefixes():void {
    this.goTo('as-prefixes');
  }
}
