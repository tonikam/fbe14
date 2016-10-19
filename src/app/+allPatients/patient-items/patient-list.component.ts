import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';

import { DataService } from "../../shared/data.service";
import { AuthService } from "../../shared/auth.service";

@Component({
  templateUrl: './patient-list.component.html'
})
export class PatientListComponent {

  actUserName: String;
  allPatients: Observable<any[]>;

  //actAppUser: Observable<any>;
  //userName: String;
  //countPatients: Number;
  //subscription: Subscription;

  constructor(private dataService: DataService,
              private authService: AuthService
  ){

    this.actUserName = this.authService.loggedInUserName;
    this.allPatients = this.dataService.getPatientsWithCases();

    //this.userName = this.dataService.getCachedUserName();
    //this.allPatients.subscribe((queriedItems) => {this.countPatients = queriedItems.length});


    /*
    this.actAppUser = this.dataService.getLastManagedUser();
    this.actAppUser.subscribe((user) => {this.userName = user.name});
    this.allPatients = this.dataService.getPatientWithCases(this.actAppUser);
    this.allPatients.subscribe((queriedItems) => {this.countPatients = queriedItems.length});

    console.log("Patients: " + this.allPatients + " Anzahl Patienten: " + this.countPatients + " User: " + this.userName);
    */
  }

}
