import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AngularFire } from 'angularfire2';

import { AuthService } from "./auth.service";

@Component({
    selector: 'disease-diary-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private authService: AuthService,
              private af: AngularFire,
              private router: Router) {
    this.af.auth.subscribe(auth => console.log(auth));
   }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
