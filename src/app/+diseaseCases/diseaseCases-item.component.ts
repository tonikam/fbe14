import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";

import { Subscription } from "rxjs/Rx";

import {DataService} from "../shared/data.service";

@Component({
  selector: '[diseaseCases-item]',
  templateUrl: 'diseaseCases-item.component.html'
})
export class DiseaseCasesItemComponent implements OnInit {
  @Input() diseaseCase: any;

  patientKey: String;

  diseaseCaseKey: String;

  subscription:Subscription;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {

        this.patientKey = this.route.parent.snapshot.params['patientKey'];
        console.log("diseaseCase - item  - patientKey: " + this.patientKey);
  };

  ngOnInit() {
    this.diseaseCaseKey = this.diseaseCase.$key;
  }

  createDiseaseEvent(key_value) {
    this.dataService.createDiseaseEvent(this.diseaseCase.$key,key_value);
  };
}

