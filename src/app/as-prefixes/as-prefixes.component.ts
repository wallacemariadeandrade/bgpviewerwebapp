import { Component, Input, OnInit } from '@angular/core';
import AsPrefixes from '../model/asPrefixes';

@Component({
  selector: 'app-as-prefixes',
  templateUrl: './as-prefixes.component.html',
  styleUrls: ['./as-prefixes.component.css']
})
export class AsPrefixesComponent implements OnInit {

  @Input() prefixes?: AsPrefixes;
  @Input() asNumber?: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
