import { Injectable } from "@angular/core";

import { AngularFire } from 'angularfire2';

import { User } from "./user.interface";

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) {}

  registerUser(user: User) {
    this.af.auth.createUser({ email: user.email, password: user.password});
  }

  loginUser(user: User) {
    this.af.auth.login({ email: user.email, password: user.password});
    }

  logout() {
    this.af.auth.logout();
  }

}
