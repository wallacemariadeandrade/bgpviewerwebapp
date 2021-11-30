import { Component, Input, OnInit } from '@angular/core';
import AsIx from '../model/asIx';

@Component({
  selector: 'app-as-ixs',
  templateUrl: './as-ixs.component.html',
  styleUrls: ['./as-ixs.component.css']
})
export class AsIxsComponent implements OnInit {

  @Input() ixs?: AsIx[];
  @Input() asNumber?: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
