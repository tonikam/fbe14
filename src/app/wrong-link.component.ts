import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import {AngularFire} from "angularfire2/angularfire2";

import { AuthService } from "./shared/auth.service";

@Component({
  templateUrl: './wrong-link.component.html',
  styles: []
})

export class WrongLinkComponent implements OnInit{

  showLinkLogin: boolean;

  constructor(private authService: AuthService,
              private af: AngularFire,
              private router: Router) {
    this.af.auth.subscribe(auth => console.log(auth));
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

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  };

  onLogin() {
    this.router.navigate(['/login']);
  }
}
