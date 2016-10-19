import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { Subscription } from "rxjs/Rx";

import { AngularFire } from 'angularfire2';

import { AuthService } from "./auth.service";

@Component({
    selector: 'disease-diary-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  userName: String;

  constructor(private authService: AuthService,
              private af: AngularFire,
              private router: Router) {

    this.subscription = this.af.auth.subscribe(auth => console.log(auth));
    this.subscription = this.af.auth.subscribe(auth => {
      if (auth) {
        this.userName = ": " + this.authService.getActUserData().uid;
      } else {
        this.userName = "";
      }
      console.log(auth);
    });

  };

  ngOnInit(){
    this.subscription = this.af.auth.subscribe(auth => console.log(auth));
  };

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  };

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  };
}
