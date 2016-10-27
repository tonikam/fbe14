
import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import { AngularFire } from 'angularfire2';

import { DataService } from "../shared/data.service";
import { LogService } from "../shared/log.service";

@Component({
  templateUrl: './diseaseCases-new.component.html'
})
export class DiseaseCasesNewComponent {

  private subscription: Subscription;

  loggedInUserKey: String;
  loggedInUserName: String;

  patientKey: String;
  patientName: String;

  diseaseCaseKey: String;
  diseaseCaseName: String;
  diseaseCase: Observable<any>;

  constructor(private route: ActivatedRoute,
              private af: AngularFire,
              private location: Location,
              private dataService: DataService,
              private logService: LogService
  ){

    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.diseaseCaseKey = params['diseaseCaseKey'];

        this.patientKey = this.route.parent.snapshot.params['patientKey'];
        console.log("diseaseCases new - patientKey: " + this.patientKey);
        this.logService.logConsole("diseaseCases-new", "constructor - patientKey: ", this.patientKey);

        this.af.auth.subscribe(auth => {
          if (auth) {
            this.af.database.object(`/_db2/users/` + auth.uid).subscribe((user) => {
              this.loggedInUserKey = user.$key;
              this.loggedInUserName = user.name;
              this.logService.logConsole("diseaseCases-new", "constructor - user", this.loggedInUserName + " - " + this.loggedInUserKey);

              this.dataService.getPatient(this.loggedInUserKey,this.patientKey).subscribe((patient) => {
                this.patientName = patient.name;
                this.logService.logConsole("diseaseCases-new", "constructor - patient", patient.name);

                this.dataService.getDiseaseCase(this.patientKey, this.diseaseCaseKey).subscribe((diseaseCase) => {
                  this.diseaseCaseName = diseaseCase.name;

                });
              });
            });
          }
        });
      });
  };

  createDiseaseCase(key_value) {
    this.dataService.createDiseaseCase(this.patientKey,key_value);
    this.goBack();
  };

  goBack() {
    this.location.back();
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  };
}

