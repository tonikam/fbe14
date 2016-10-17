import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import {AngularFire} from "angularfire2/angularfire2";

import { AuthService } from "./shared/auth.service";

@Component({
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit{

  backgroundURL: String;

  constructor(private authService: AuthService,
              private af: AngularFire,
              private router: Router) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  ngOnInit() {

  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
