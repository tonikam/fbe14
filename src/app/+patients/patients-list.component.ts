import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Observable } from 'rxjs';

import { AngularFire } from 'angularfire2';

import { DataService } from "../shared/data.service";
import { LogService } from "../shared/log.service";

@Component({
  templateUrl: './patients-list.component.html'
})
export class PatientsListComponent implements OnInit{

  loggedInUserName: String;

  getUser: Observable<any>;

  allPatients: Observable<any[]>;
  patientsCount: Number;

  constructor(private router: Router,
              private af: AngularFire,
              private dataService: DataService,
              private logService: LogService
  ){
    this.logService.logConsole("patients-list","constructor","start");
  };

  ngOnInit() {
    this.logService.logConsole("patients-list","ngOnInit","start");

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.af.database.object(`/_db2/users/` + auth.uid).subscribe((user) => {
            this.loggedInUserName = user.name;
            this.logService.logConsole("patients-list", "ngOnInit - user", user.name);

            this.allPatients = this.dataService.getPatients(user.$key);
            if (this.allPatients) {
              this.allPatients.subscribe((queriedItems) => {
                this.patientsCount = queriedItems.length;
              });
            }
        });
      } else {
        this.logService.logConsole("patients-list", "ngOnInit - user", "no logged in user");
      }
    });
  };

  onNew() {
    this.router.navigate(['patients/new']);
  };
}
