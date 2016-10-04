import { Component} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import {DataService} from "../../shared/data.service";

@Component({
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent {

  private subscription: Subscription;
  private patientKey: String;
  private userKey: String;
  private user: Observable<any>;
  private patient: Observable<any>;
  private patientName: String;
  private patientAge: String;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService){

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.patientKey = params['patientKey'];
        this.userKey = this.dataService.getCachedUserID();
        this.user = this.dataService.getCachedUserData(this.userKey);
        this.patient = this.dataService.getPatient(this.userKey,this.patientKey);
        this.patient.subscribe((patient) => {this.patientName = patient.name});
        this.patient.subscribe((patient) => {this.patientAge = patient.age});
      }
    );
    this.setParameters();
  };

  setParameters() {

  };

  updatePatient(key_value) {
    this.dataService.updatePatient(this.userKey,this.patientKey,key_value)
  };

}
