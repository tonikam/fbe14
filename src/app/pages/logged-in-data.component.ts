import { Component } from '@angular/core';

import { Observable } from "rxjs";

import { DataService } from "../shared/data.service";

import { CurrentPatient } from "../shared/current-patient.service";
import { LoggedInUser } from "../shared/logged-in-user.service";


@Component({
  templateUrl: './logged-in-data.component.html'
})

export class LoggedInDataComponent {

  private loggedInUserID: String;
  private loggedInUserName: String;
  private loggedInUserRole: String;

  currentPatientName: String;
  currentPatientKey: String;

  constructor(private dataService: DataService,
              private loggedInUser: LoggedInUser,
              private currentPatient: CurrentPatient){

    this.getData();
  };

  getData(){
    console.log("getData");
    let loggedInUserData = this.dataService.getLoggedInUser();

    if (loggedInUserData != undefined) {
      this.loggedInUserID = loggedInUserData.id;
      this.loggedInUserName = loggedInUserData.name;
      this.loggedInUserRole = loggedInUserData.role;
    } else {
      this.loggedInUserID = "N/A";
      this.loggedInUserName = "N/A";
      this.loggedInUserRole = "N/A";
    }


    this.currentPatient.patientName.subscribe(pName => {
      this.currentPatientName = pName;
      console.log("[header - OnInit] patientName: " + pName);
    });
    this.currentPatient.patientKey.subscribe(pKey => {
      this.currentPatientKey = pKey;
      console.log("[header - OnInit] patientName: " + pKey);
    });



  };
}
