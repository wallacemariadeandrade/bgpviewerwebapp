import { Component, Input, OnInit } from '@angular/core';
import AsPeers from '../model/asPeers';

@Component({
  selector: 'app-as-upstreams',
  templateUrl: './as-upstreams.component.html',
  styleUrls: ['./as-upstreams.component.css']
})
export class AsUpstreamsComponent implements OnInit {

  @Input() upstreams?: AsPeers;
  @Input() asNumber?: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
