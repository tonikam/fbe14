import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { AngularFire } from 'angularfire2';
import { AuthService } from "./auth.service";

import { DataService } from "./data.service";

import { LoggedInUser } from "./logged-in-user.service";

@Component({
    selector: 'disease-diary-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{

  loggedInUserName: String;
  //currentUser: Observable<any>;
  currentUser: String;

  constructor(private authService: AuthService,
              private af: AngularFire,
              private router: Router,
              private dataService: DataService,
              private loggedInUser: LoggedInUser) {

    let text1 = "[header]";
    let text2 = "constructor";
    console.log(text1 + "" + text2);

  };

  ngOnInit() {
    try {
      this.loggedInUser.userName.subscribe(loggedIn => {
        this.loggedInUserName = "" + loggedIn;
        console.log("[header - OnInitx] loggedInUserName: " + loggedIn);

        /*
        let loggedInUserData = this.dataService.getLoggedInUser();
        if (loggedInUserData != undefined) {
          this.currentUser = this.dataService.getUser(loggedInUserData.id);
          console.log("header - oninit - currentUser: " + this.currentUser);
        };
        */

      });

      this.currentUser = "99";

    } catch(e) {
      console.log("[header - OnInit] error: " + e);
    }

  };

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  };
}
