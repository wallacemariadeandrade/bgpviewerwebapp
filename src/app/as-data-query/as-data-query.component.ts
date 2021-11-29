import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParamsService } from '../params.service';

@Component({
  selector: 'app-as-data-query',
  templateUrl: './as-data-query.component.html',
  styleUrls: ['./as-data-query.component.css']
})
export class AsDataQueryComponent implements OnInit {

  @Input() asNumber!: Number;

  constructor(
    private router: Router,
    private paramsService: ParamsService) { }

  ngOnInit(): void {
  }

  checkInput():boolean {
    return this.asNumber != null && this.asNumber != undefined && !isNaN(Number(this.asNumber));
  }

  inputInvalid():string {
    return "Enter a valid as number please!";
  }

  navigateTo(url: string) {
    if(this.checkInput()) 
      this.router.navigateByUrl(url);
    else
      alert(this.inputInvalid());
  }

  goTo(url:string){ 
    this.paramsService.setUrl(url);
    this.paramsService.setQueryParam(this.asNumber.toString());
    this.navigateTo('/apiSelection');
  }

  details():void {
    this.goTo(`/as-details`);
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
