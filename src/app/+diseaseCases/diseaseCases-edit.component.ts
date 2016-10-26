
import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import {DataService} from "../shared/data.service";

import { LoggedInUser } from "../shared/logged-in-user.service";
import { CurrentPatient } from "../shared/current-patient.service";

@Component({
  templateUrl: './diseaseCases-edit.component.html'
})
export class DiseaseCasesEditComponent {

  subscription:Subscription;

  patientKey: String;

  diseaseCaseKey: String;
  diseaseCaseName: String;
  diseaseCaseType: String;

  loggedInUserData: any;
  currentPatientData: any;

  constructor(private route:ActivatedRoute,
              private dataService: DataService,
              private location: Location,
              private loggedInUser: LoggedInUser,
              private currentPatient: CurrentPatient) {

    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.diseaseCaseKey = params['diseaseCaseKey'];

        this.patientKey = this.route.parent.snapshot.params['patientKey'];

        this.loggedInUser.userData.subscribe(loggedInData => {
          this.loggedInUserData = loggedInData;

          this.currentPatient.patientData.subscribe(patientData => {
            this.currentPatientData = patientData;

            this.dataService.getDiseaseCase(this.patientKey, this.diseaseCaseKey).subscribe((diseaseCase) => {
              this.diseaseCaseName = diseaseCase.name;
              this.diseaseCaseType = diseaseCase.type;
            });
          });
        });
      });
  };

  updateDiseaseCase(key_value) {
    this.dataService.updateDiseaseCase(this.patientKey, this.diseaseCaseKey, key_value)
    this.goBack();
  };

  goBack() {
    this.location.back();
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


