import { Component, Input, OnInit } from '@angular/core';
import { QueryComponent } from '../queryComponent';

@Component({
  selector: 'app-prefix-query',
  templateUrl: './prefix-query.component.html',
  styleUrls: ['./prefix-query.component.css']
})
export class PrefixQueryComponent extends QueryComponent implements OnInit {

  readonly IPV4_PREFIX_PATTERN = "((?:[0-9]{1,3}\.){3}[0-9]{1,3}\/([0-9][0-9]|[0-9]))";
  readonly IPV6_PREFIX_PATTERN = "(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/([0-9][0-9][0-9]|[0-9][0-9]|[0-9])";

  @Input() prefix: string = "";

  ngOnInit(): void { }

  checkInput(): boolean {
    let iPv4Regex = new RegExp(this.IPV4_PREFIX_PATTERN);
    if(iPv4Regex.test(this.prefix))
      return true;
    else {
      let iPv6Regex = new RegExp(this.IPV6_PREFIX_PATTERN);
      return iPv6Regex.test(this.prefix);
    }
  }
  
  inputInvalid(): string {
    return "Please enter a valid prefix!<br/>Examples: 8.8.8.0/24, 2001:db8::/32";
  }
  
  getParameter(): string {
    return this.prefix;
  }

  details(): void {
    this.goTo('prefix-details');
  }

}
