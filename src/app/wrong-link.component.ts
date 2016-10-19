import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import {Subscription} from "rxjs/Subscription";

import {AngularFire} from "angularfire2/angularfire2";

import { AuthService } from "./shared/auth.service";

@Component({
  templateUrl: './wrong-link.component.html',
  styles: []
})

export class WrongLinkComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  showLinkLogin: boolean;

  constructor(private authService: AuthService,
              private af: AngularFire,
              private router: Router) {
    this.subscription = this.af.auth.subscribe(auth => console.log(auth));
  };

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if (user) {
        this.showLinkLogin = false;
      } else {
        this.showLinkLogin = true;
      }
    });
  };

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  };

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  };

  onLogin() {
    this.router.navigate(['/login']);
  }
}
