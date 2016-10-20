import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from "../../shared/data.service";

@Component({
  templateUrl: './patient-list.component.html'
})
export class PatientListComponent {

  currentUserName: String;
  allPatients: Observable<any[]>;
  patientsCount: Number;

  constructor(private dataService: DataService
  ){

    if (this.dataService.getLoggedInUser() != undefined) {
      this.currentUserName = this.dataService.getLoggedInUser().name;
    }

    this.allPatients = this.dataService.getPatientsWithCases();

    this.allPatients.subscribe((queriedItems) => {this.patientsCount = queriedItems.length});

  }

}
