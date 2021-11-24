import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-as-data-query',
  templateUrl: './as-data-query.component.html',
  styleUrls: ['./as-data-query.component.css']
})
export class AsDataQueryComponent implements OnInit {

  @Input() asNumber!: Number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkAs():boolean {
    return this.asNumber != null && this.asNumber != undefined && !isNaN(Number(this.asNumber));
  }

  navigateTo(url: string) {
    if(this.checkAs()) 
      this.router.navigateByUrl(url);
    else
      alert('Incorrect AS!');
  }

  details():void {
    this.navigateTo(`/as/${this.asNumber}/details`);
  }

  peers():void {
    this.navigateTo(`/as/${this.asNumber}/peers`);
  }

  upstreams():void {
    this.navigateTo(`/as/${this.asNumber}/upstreams`);
  }

  downstreams():void {
    this.navigateTo(`/as/${this.asNumber}/downstreams`);
  }

  ixs():void {
    this.navigateTo(`/as/${this.asNumber}/ixs`);
  }

  prefixes():void {
    this.navigateTo(`/as/${this.asNumber}/prefixes`);
  }
}
