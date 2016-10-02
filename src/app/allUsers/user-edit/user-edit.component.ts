import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {async} from "rxjs/scheduler/async";

import {HelperService} from "../../shared/helper.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  private subscription: Subscription;
  private patientKey: String;
  private userKey: String;
  private patient: Observable<any>;
  private patientName: String;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private af: AngularFire,
              private helper: HelperService){

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.patientKey = params['patientKey'];
        this.userKey = this.helper.getUserID();
        this.patient = this.getPatient();
      }
    );

    // only breakpoint for debugging
    this.userKey = "uid1";

  };

  ngOnInit() {

  };

  getPatient () {
    return this.af.database.object(`/_db2/patients/` + this.userKey + `/` + this.patientKey);
  }
}
