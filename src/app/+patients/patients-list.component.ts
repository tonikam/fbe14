import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';

import { DataService } from "../shared/data.service";

import { LoggedInUser } from "../shared/logged-in-user.service";

@Component({
  templateUrl: './patients-list.component.html'
})
export class PatientsListComponent {

  allPatients: Observable<any[]>;
  patientsCount: Number;

  loggedInUserKey: String;

  loggedInUserData: any;
  loggedInUserName: String;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService,
              private loggedInUser: LoggedInUser
  ){

    // get key from routing parameters
    this.route.params.subscribe(
      (params:any) => {
        this.loggedInUserKey = params['userKey'];

        this.loggedInUser.userData.subscribe(loggedInData => {
          this.loggedInUserData = loggedInData;

          // get name from observable subject for page title
          this.loggedInUserName = this.loggedInUserData.name;

          // get data from database
          this.allPatients = this.dataService.getPatients(this.loggedInUserKey);
          if (this.allPatients) {
            this.allPatients.subscribe((queriedItems) => {
              this.patientsCount = queriedItems.length;
            });
          };
        });
      });
  };

  onNew(loggedInUserKey) {
    this.router.navigate(['patients/' + this.loggedInUserData.key + '/new']);
  };
}
