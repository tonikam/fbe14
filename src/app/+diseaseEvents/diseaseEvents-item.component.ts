import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../shared/data.service";

@Component({
  selector: '[diseaseEvents-item]',
  templateUrl: 'diseaseEvents-item.component.html'
})
export class DiseaseEventsItemComponent implements OnInit {
  @Input() diseaseEvent: any;

  diseaseEventKey: String;

  constructor(private router: Router,
              private dataService: DataService){
  };

  ngOnInit() {
    this.diseaseEventKey = this.diseaseEvent.$key;
  }

}

