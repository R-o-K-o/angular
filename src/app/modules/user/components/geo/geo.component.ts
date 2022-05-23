import {Component, Input, OnInit} from '@angular/core';

import {IGeo} from "../../interfaces";

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})

export class GeoComponent implements OnInit {
  @Input()
  geo: IGeo;

  constructor() { }

  ngOnInit(): void { }
}
