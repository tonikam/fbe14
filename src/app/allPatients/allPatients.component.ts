import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import {DataService} from "../shared/data.service";

@Component({
  templateUrl: './allPatients.component.html'
})
export class AllPatientsComponent {

  actUser: Observable<any>;
  allPatients: Observable<any[]>;

  constructor(private dataService: DataService) {
    this.actUser = this.dataService.getActUser();
    this.allPatients = this.dataService.getPatientWithCases("uid1");
  }

}
