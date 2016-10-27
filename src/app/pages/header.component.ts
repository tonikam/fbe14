import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { AngularFire } from 'angularfire2';

import { AuthService } from "../shared/auth.service";
import { DataService } from "../shared/data.service";

@Component({
    selector: 'disease-diary-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{

  loggedInUserName: String;

  //loggedInUserRole -> für Anzeige "Admin" Tab

  constructor(private authService: AuthService,
              private dataService: DataService,
              private af: AngularFire,
              private router: Router
  ) {

  };

  ngOnInit() {

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
