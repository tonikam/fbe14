import { Component, OnInit, OnDestroy } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { LoggedInUser } from "./shared/logged-in-user.service";

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  loggedInUserName: String;

  constructor(private af: AngularFire,
              private loggedInUser: LoggedInUser) {

    this.loggedInUser.userName.subscribe(name => {
      console.log("[home-component] loggedInUserName: " + name);
      this.loggedInUserName = "" + name;
    });

  }
}
