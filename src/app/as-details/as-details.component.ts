import { Component, Input, OnInit } from '@angular/core';
import AsDetails from '../model/asDetails';

@Component({
  selector: 'app-as-details',
  templateUrl: './as-details.component.html',
  styleUrls: ['./as-details.component.css']
})
export class AsDetailsComponent implements OnInit {

  @Input() details?: AsDetails;

  constructor() { }

  ngOnInit(): void { }
}
