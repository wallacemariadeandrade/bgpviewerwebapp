import { Component, Input, OnInit } from '@angular/core';
import AsPeers from '../model/asPeers';

@Component({
  selector: 'app-as-downstreams',
  templateUrl: './as-downstreams.component.html',
  styleUrls: ['./as-downstreams.component.css']
})
export class AsDownstreamsComponent implements OnInit {

  @Input() downstreams?:AsPeers;
  @Input() asNumber?: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
