import { Component, OnInit} from '@angular/core';

import { Observable } from 'rxjs';

import {DataService} from "../shared/data.service";

@Component({
  templateUrl: './patient-list.component.html'
})
export class PatientListComponent implements OnInit {

  actAppUser: Observable<any>;
  userName: String;
  allPatients: Observable<any[]>;
  countPatients: Number;

  constructor(private dataService: DataService) {
    /*
    this.actAppUser = this.dataService.getActAppUser();
    this.actAppUser.subscribe((user) => {this.userName = user.name});
    this.allPatients = this.dataService.getPatientWithCases(this.actAppUser);
    this.allPatients.subscribe((queriedItems) => {this.countPatients = queriedItems.length});

    console.log("Patients: " + this.allPatients + " Anzahl Patienten: " + this.countPatients + " User: " + this.userName);
    */
  }

  ngOnInit() {
    this.actAppUser = this.dataService.getActAppUser();
    this.actAppUser.subscribe((user) => {this.userName = user.name});
    this.allPatients = this.dataService.getPatientWithCases(this.actAppUser);
    this.allPatients.subscribe((queriedItems) => {this.countPatients = queriedItems.length});

    console.log("Patients: " + this.allPatients + " Anzahl Patienten: " + this.countPatients + " User: " + this.userName);
  }

}
