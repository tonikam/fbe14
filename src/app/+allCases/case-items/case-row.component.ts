import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../../shared/data.service";

@Component({
  selector: '[diseaseCase-row]',
  templateUrl: 'case-row.component.html'
})
export class DiseaseCaseRowComponent implements OnInit {
  @Input() diseaseCase: any;

  diseaseCaseKey: String;

  constructor(private router: Router,
              private dataService: DataService){
  };

  ngOnInit() {
    this.diseaseCaseKey = this.diseaseCase.$key;
  }

  createDiseaseEvent(key_value) {
    this.dataService.createDiseaseEvent(this.diseaseCase.$key,key_value);
  };
}

