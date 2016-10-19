import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

//import {Subscription} from "rxjs/Subscription";

import {AngularFire} from "angularfire2/angularfire2";

import { AuthService } from "./shared/auth.service";

@Component({
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {

  //subscription: Subscription;
  backgroundURL: String;

  constructor(private authService: AuthService,
              private af: AngularFire,
              private router: Router) {

    //this.subscription = this.af.auth.subscribe(auth => {
    this.af.auth.subscribe(auth => {
      console.log("[home-component] auth: " + auth)
    });

  }

  ngOnInit() {
    //this.subscription = this.af.auth.subscribe(auth => console.log(auth));
  };

  ngOnDestroy() {
      //this.subscription.unsubscribe();
  };

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
