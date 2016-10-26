
import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import {DataService} from "../shared/data.service";

import { CurrentPatient } from "../shared/current-patient.service";
import { CurrentDiseaseCase } from "../shared/current-disease-case.service";

@Component({
  templateUrl: './diseaseEvents-edit.component.html'
})
export class DiseaseEventsEditComponent {

  subscription:Subscription;

  diseaseEventKey: String;
  diseaseEventName: String;
  diseaseEventValue: String;

  currentPatientData: any;
  currentDiseaseCaseData: any;

  constructor(private route:ActivatedRoute,
              private dataService: DataService,
              private location: Location,
              private currentPatient: CurrentPatient,
              private currentDiseaseCase: CurrentDiseaseCase) {

    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.diseaseEventKey = params['diseaseEventKey'];

        this.currentPatient.patientData.subscribe(patientData => {
          this.currentPatientData = patientData;

          this.currentDiseaseCase.diseaseCaseData.subscribe(diseaseCaseData => {
            this.currentDiseaseCaseData = diseaseCaseData;

            this.dataService.getDiseaseEvent(this.currentDiseaseCaseData.key, this.diseaseEventKey).subscribe((diseaseCase) => {
              this.diseaseEventName = diseaseCase.name;
              this.diseaseEventValue = diseaseCase.value;
            });
          });
        });
      });
  };

  updateDiseaseEvent(key_value) {
    this.dataService.updateDiseaseEvent(this.currentDiseaseCaseData.key, this.diseaseEventKey, key_value)
    this.goBack();
  };

  goBack() {
    this.location.back();
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


