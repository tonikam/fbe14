
import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import {DataService} from "../shared/data.service";

import { CurrentPatient } from "../shared/current-patient.service";

@Component({
  templateUrl: './diseaseCases-new.component.html'
})
export class DiseaseCasesNewComponent {

  private subscription: Subscription;

  patientKey: String;
  diseaseCaseKey: String;
  diseaseCaseName: String;
  diseaseCase: Observable<any>;
  currentPatientData: any;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private dataService: DataService,
              private currentPatient: CurrentPatient){

    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.diseaseCaseKey = params['diseaseCaseKey'];

        this.patientKey = this.route.parent.snapshot.params['patientKey'];
        console.log("diseaseCases new - patientKey: " + this.patientKey);

        this.currentPatient.patientData.subscribe(patientData => {
          this.currentPatientData = patientData;

          this.dataService.getDiseaseCase(this.patientKey, this.diseaseCaseKey).subscribe((diseaseCase) => {
            this.diseaseCaseName = diseaseCase.name;

          });
        });
      });
  };

  createDiseaseCase(key_value) {
    this.dataService.createDiseaseCase(this.patientKey,key_value);
    this.goBack();
  };

  goBack() {
    this.location.back();
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  };
}

