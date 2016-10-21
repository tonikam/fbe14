import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from "../../shared/data.service";

import { LoggedInUser } from "../../shared/logged-in-user.service";

@Component({
  templateUrl: './patient-list.component.html'
})
export class PatientListComponent {

  //currentUserName: String;

  allPatients: Observable<any[]>;
  patientsCount: Number;

  loggedInUserName: String;

  constructor(private dataService: DataService,
              private loggedInUser: LoggedInUser
  ){

    /*
    if (this.dataService.getLoggedInUser() != undefined) {
      this.currentUserName = this.dataService.getLoggedInUser().name;
      console.log("[patient - list] currentUserName: " +  this.currentUserName);
    }
    */

    this.loggedInUser.userName.subscribe(loggedIn => {
      this.loggedInUserName = "" + loggedIn;
      console.log("[patient - list] loggedInUserName: " + loggedIn);
    });
    console.log("[patient - list] loggedInUserName: " + this.loggedInUserName);



    this.allPatients = this.dataService.getPatientsWithCases();
    if (this.allPatients) {
      this.allPatients.subscribe((queriedItems) => {
        this.patientsCount = queriedItems.length;

      });
    };

  }

}
