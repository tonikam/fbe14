import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AngularFire } from 'angularfire2';
import { AuthService } from "./auth.service";

import { LoggedInUser } from "./logged-in-user.service";

@Component({
    selector: 'disease-diary-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

  loggedInUserName: String;

  constructor(private authService: AuthService,
              private af: AngularFire,
              private router: Router,
              private loggedInUser: LoggedInUser) {

    this.loggedInUser.userName.subscribe(nameSub => {
      console.log("[header-component] loggedInUserName: " + nameSub);
      this.loggedInUserName = "" + nameSub;
    });
  };

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  };
}
