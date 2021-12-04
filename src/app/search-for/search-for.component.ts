import { Component, Input, OnInit } from '@angular/core';
import Search from '../model/search';

@Component({
  selector: 'app-search-for',
  templateUrl: './search-for.component.html',
  styleUrls: ['./search-for.component.css']
})
export class SearchForComponent implements OnInit {

  @Input() search?: Search;
  @Input() term?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
