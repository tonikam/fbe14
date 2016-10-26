import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';

import { DataService } from "../shared/data.service";

import { LoggedInUser } from "../shared/logged-in-user.service";
import { CurrentPatient } from "../shared/current-patient.service";
import { CurrentDiseaseCase} from "../shared/current-disease-case.service";

@Component({
  templateUrl: './diseaseEvents-list.component.html'
})
export class DiseaseEventsListComponent implements OnInit {

  patientKey: String;
  currentDiseaseCaseName: String;
  currentDiseaseCaseKey: String;

  loggedInUserData: any;
  currentPatientData: any;
  currentDiseaseCaseData: any;

  allDiseaseEvents: Observable<any[]>;
  diseaseEventsCount: Number;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private loggedInUser: LoggedInUser,
              private currentPatient: CurrentPatient,
              private currentDiseaseCase: CurrentDiseaseCase){

    this.route.params.subscribe(
      (params:any) => {
        this.currentDiseaseCaseKey = params['diseaseCaseKey'];

        this.patientKey = this.route.parent.snapshot.params['patientKey'];
        console.log("events list c - patientKey: " + this.patientKey);

        this.loggedInUser.userData.subscribe(loggedInData => {
          this.loggedInUserData = loggedInData;

          // set data of diseaseCase in data service
          this.dataService.setCurrentDiseaseCase(this.patientKey, this.currentDiseaseCaseKey);

          this.currentPatient.patientData.subscribe(patientData => {
            this.currentPatientData = patientData;

            this.currentDiseaseCase.diseaseCaseData.subscribe(diseaseCaseData => {
              this.currentDiseaseCaseData = diseaseCaseData;

              // get name from observable subject for page title
              this.currentDiseaseCaseName = this.currentDiseaseCaseData.name;

              // get key from routing parameters
              this.allDiseaseEvents = this.dataService.getDiseaseEvents(this.currentDiseaseCaseKey);
              if (this.allDiseaseEvents) {
                this.allDiseaseEvents.subscribe((queriedItems) => {
                  this.diseaseEventsCount = queriedItems.length;
                });
              }
            });
          });
        });
      });
  };

  ngOnInit() {
    this.route.params.subscribe(
      (params:any) => {
        this.currentDiseaseCaseKey = params['diseaseCaseKey'];

        this.patientKey = this.route.parent.snapshot.params['patientKey'];
        console.log("events list i - patientKey: " + this.patientKey);

      });
  }
}
