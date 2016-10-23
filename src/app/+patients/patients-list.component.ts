import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from "../shared/data.service";

import { LoggedInUser } from "../shared/logged-in-user.service";

@Component({
  templateUrl: './patients-list.component.html'
})
export class PatientsListComponent {

  //currentUserName: String;

  allPatients: Observable<any[]>;
  patientsCount: Number;

  loggedInUserName: String;

  constructor(private dataService: DataService,
              private loggedInUser: LoggedInUser
  ){

    this.loggedInUser.userName.subscribe(loggedIn => {
      this.loggedInUserName = "" + loggedIn;
      console.log("[patient - list] loggedInUserName: " + loggedIn);
      this.allPatients = this.dataService.getPatientsWithCases();
      if (this.allPatients) {
        this.allPatients.subscribe((queriedItems) => {
          this.patientsCount = queriedItems.length;

        });
      };

    });
  };
}
