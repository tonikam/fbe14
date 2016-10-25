import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { AngularFire } from 'angularfire2';
import { AuthService } from "../shared/auth.service";

import { LoggedInUser } from "../shared/logged-in-user.service";

@Component({
    selector: 'disease-diary-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{

  loggedInUserData: any;

  currentUserRole: String;

  constructor(private authService: AuthService,
              private af: AngularFire,
              private router: Router,
              private loggedInUser: LoggedInUser) {
  };

  ngOnInit() {
    try {
        this.loggedInUser.userData.subscribe(loggedInData => {
          this.loggedInUserData = loggedInData;
          console.log("[patient - list] loggedInUserData - key: " + this.loggedInUserData.key);
          console.log("[patient - list] loggedInUserData - name: " + this.loggedInUserData.name);
      });

      this.currentUserRole = "99";

    } catch(e) {
      console.log("[header - OnInit] error: " + e);
    }
  };

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  };
}
