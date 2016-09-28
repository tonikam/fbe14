import { Injectable } from "@angular/core";

import { AngularFire } from 'angularfire2';

import { User } from "./user.interface";

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) {}

  registerUser(user: User) {
    this.af.auth.createUser({ email: user.email, password: user.password})
      .then((value) => {
        // create entry in users - table with correct uid
        this.af.database.object('/_db3/users/' + value.uid).set({name: user.email, age: 0});
        console.log("Registered uid: " + value.uid);
      })
      .catch((error) => {
        console.log("Register Error: " + error.message);
      });
  }

  loginUser(user: User) {
    this.af.auth.login({ email: user.email, password: user.password})
      .then((value) => {
        console.log("Login uid: " + value.uid);
      })
      .catch((error) => {
        console.log("Login Error: " + error.message);
      });
    }

  logout() {
    this.af.auth.logout()
  }

}
