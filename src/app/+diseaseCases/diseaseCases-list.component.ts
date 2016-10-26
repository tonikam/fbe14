import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';

import { DataService } from "../shared/data.service";

import { LoggedInUser } from "../shared/logged-in-user.service";
import { CurrentPatient } from "../shared/current-patient.service";

@Component({
  templateUrl: './diseaseCases-list.component.html'
})
export class DiseaseCasesListComponent implements OnInit{

  patientKey: String;

  loggedInUserData: any;
  currentPatientData: any;

  allDiseaseCases: Observable<any[]>;
  diseaseCasesCount: Number;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private loggedInUser: LoggedInUser,
              private currentPatient: CurrentPatient
  ){

    this.route.params.subscribe(
      (params:any) => {
        this.patientKey = params['patientKey'];
        console.log("diseaseCases-list - patientKey: " + this.patientKey);

        this.loggedInUser.userData.subscribe(loggedInData => {
          this.loggedInUserData = loggedInData;

          this.currentPatient.patientData.subscribe(patientData => {
            this.currentPatientData = patientData;

            // get key from routing parameters
            this.allDiseaseCases = this.dataService.getDiseaseCases(this.patientKey);
            if (this.allDiseaseCases) {
              this.allDiseaseCases.subscribe((queriedItems) => {
                this.diseaseCasesCount = queriedItems.length;
              });
            }
          });
        });
      });
  };

  ngOnInit() {
    this.route.params.subscribe(
      (params:any) => {
        this.patientKey = params['patientKey'];
      });
  };

}
