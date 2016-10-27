
import { Component} from '@angular/core';
import { Location } from "@angular/common";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import { AngularFire } from 'angularfire2';

import { DataService } from "../shared/data.service";
import { LogService } from "../shared/log.service";

@Component({
  templateUrl: './patients-new.component.html'
})
export class PatientsNewComponent {

  loggedInUserKey: String;
  loggedInUserName: String;

  constructor(private af: AngularFire,
              private location: Location,
              private dataService: DataService,
              private logService: LogService
  ){

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.af.database.object(`/_db2/users/` + auth.uid).subscribe((user) => {
          this.loggedInUserKey = user.$key;
          this.loggedInUserName = user.name;
        });
      }
    });
  };

  createPatient(key_value) {
    this.dataService.createPatient(this.loggedInUserKey,key_value);
    this.goBack();
  };

  goBack() {
    this.location.back();
  };
}

