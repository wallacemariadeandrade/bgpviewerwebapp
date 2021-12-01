import { Component, Input, OnInit } from '@angular/core';
import PrefixDetails from '../model/prefixDetails';

@Component({
  selector: 'app-prefix-details',
  templateUrl: './prefix-details.component.html',
  styleUrls: ['./prefix-details.component.css']
})
export class PrefixDetailsComponent implements OnInit {

  @Input() prefix?: PrefixDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
