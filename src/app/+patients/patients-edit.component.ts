
import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import {DataService} from "../shared/data.service";

@Component({
  templateUrl: './patients-edit.component.html'
})
export class PatientsEditComponent {

  subscription:Subscription;

  userKey: String;
  userName: String;
  patientKey: String;
  patientName: String;
  patientAge: String;

  patient: Observable<any>;
  user: Observable<any>;

  constructor(private route:ActivatedRoute,
              private dataService: DataService,
              private location: Location) {

    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.patientKey = params['patientKey'];

        this.userKey = this.route.parent.snapshot.params['userKey'];

        this.dataService.getUser(this.userKey).subscribe((user) => {
          this.userName = user.name;

          this.dataService.getPatient(this.userKey, this.patientKey).subscribe((patient) => {
            this.patientName = patient.name;
            this.patientAge = patient.age;
          });
        });
      });
  };

  updatePatient(key_value) {
    this.dataService.updatePatient(this.userKey, this.patientKey, key_value)
    this.goBack();
  };

  goBack() {
    this.location.back();
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


