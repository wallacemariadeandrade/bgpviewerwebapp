import { Component, Input, OnInit } from '@angular/core';
import AsPeers from '../model/asPeers';

@Component({
  selector: 'app-as-peers',
  templateUrl: './as-peers.component.html',
  styleUrls: ['./as-peers.component.css']
})
export class AsPeersComponent implements OnInit {

  @Input() peers?: AsPeers;
  @Input() asNumber?: Number;

  constructor() { }

  ngOnInit(): void { }

}
