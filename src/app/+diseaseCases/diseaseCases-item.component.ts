import { Component, Input, OnInit } from '@angular/core';
import { Router} from "@angular/router";

import {DataService} from "../shared/data.service";

import { CurrentDiseaseCase } from "../shared/current-disease-case.service";

@Component({
  selector: '[diseaseCases-item]',
  templateUrl: 'diseaseCases-item.component.html'
})
export class DiseaseCasesItemComponent implements OnInit {
  @Input() diseaseCase: any;

  diseaseCaseKey: String;

  constructor(private router: Router,
              private dataService: DataService,
              private currentDiseaseCase: CurrentDiseaseCase){
  };

  ngOnInit() {
    this.diseaseCaseKey = this.diseaseCase.$key;
  }

  createDiseaseEvent(key_value) {
    this.dataService.createDiseaseEvent(this.diseaseCase.$key,key_value);
  };

  openDiseaseEvents(diseaseCaseKey) {
    console.log("[diseaseCase-item] diseaseCaseKey: " + diseaseCaseKey);

    //this.dataService.setLastDiseaseCaseKey(diseaseCaseKey);
    //this.dataService.setLastDiseaseEventKey("");

    // set Subject Observable
    this.currentDiseaseCase.setDiseaseCaseData({name: this.diseaseCase.name, key: diseaseCaseKey});

    this.router.navigate(['/diseaseEvents/' + diseaseCaseKey])
  }
}

