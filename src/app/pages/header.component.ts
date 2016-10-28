import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { AngularFire } from 'angularfire2';

import { AuthService } from "../shared/auth.service";
import { ConfigService } from "../shared/config.service";
import { DataService } from "../shared/data.service";
import { LogService } from "../shared/log.service";

@Component({
    selector: 'disease-diary-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{

  loggedInUserName: String;

  currentUserRole: String;

  //loggedInUserRole -> für Anzeige "Admin" Tab

  constructor(private authService: AuthService,
              private dataService: DataService,
              private logService: LogService,
              private af: AngularFire,
              private router: Router
  ) {

  };

  ngOnInit() {

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.af.database.object(ConfigService.firebaseDbConfig.db + ConfigService.firebaseDbConfig.users + '/' + auth.uid).subscribe((user) => {
          this.loggedInUserName = user.name;
          this.logService.logConsole("patients-list", "ngOnInit - user", user.name);

          this.currentUserRole = '99';
        });
      }
    });

    /*
    if (this.dataService.getUser()) {
      this.dataService.getUser().subscribe(
        (user) => {
          this.loggedInUserName = user.name;
        });
    } else {
      this.loggedInUserName = "no logged in user";
    }
    */
  };

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  };
}
