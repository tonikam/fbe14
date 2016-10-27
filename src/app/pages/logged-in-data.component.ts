import { Component } from '@angular/core';

import { Observable } from "rxjs";

import { CurrentPatient } from "../shared/current-patient.service";
import { LoggedInUser } from "../shared/logged-in-user.service";


@Component({
  templateUrl: './logged-in-data.component.html'
})

export class LoggedInDataComponent {

  loggedInUserID: String;
  loggedInUserName: String;
  loggedInUserRole: String;
  loggedInUserData: any;

  currentPatientName: String;
  currentPatientKey: String;
  currentPatientData: any;

  constructor(private loggedInUser: LoggedInUser,
              private currentPatient: CurrentPatient){

    this.getData();
  };

  getData(){
     this.loggedInUser.userData.subscribe(loggedInData => {
      this.loggedInUserData = loggedInData;

      console.log("[logged-in-data] loggedInUserData - key: " + this.loggedInUserData.key);
      console.log("[logged-in-data] loggedInUserData - name: " + this.loggedInUserData.name);

      this.currentPatient.patientData.subscribe(patientData => {
        this.currentPatientData = patientData;
        this.currentPatientName = this.currentPatientData.name || "-";
        this.currentPatientKey = this.currentPatientData.key || "-";

        console.log("[diseaseCases - list] currentPatientData - key: " + this.currentPatientData.key);
        console.log("[diseaseCases - list] currentPatientData - name: " + this.currentPatientData.name);
      });
    });
  };
}
