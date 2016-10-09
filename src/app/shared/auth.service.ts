import { Injectable } from "@angular/core";

import { Router } from "@angular/router";

import { AngularFire } from 'angularfire2';

import { User } from "./user.interface";
import {AngularFireAuth} from "angularfire2/index";

@Injectable()
export class AuthService {

  constructor(public af: AngularFire, private router: Router) {}

  registerUser(user: User) {
    let resultRegister = {};
    this.af.auth.createUser({ email: user.email, password: user.password})
      .then((value) => {
        // create entry in users - table with correct uid
        this.af.database.object('/_db2/users/' + value.uid).set({name: user.email, age: 0});
        console.log("Registered uid: " + value.uid);
        resultRegister = {"code": "auth/ok", "message": "userid = " + value.uid};
      })
      .catch((error) => {
        console.log("Register Error: " + error.message);
        alert(JSON.stringify(error));
        resultRegister = error;
        this.router.navigate(['error']);
      });
    return resultRegister;
  };

  loginUser(user: User) {
    let resultLogin = {};
    this.af.auth.login({ email: user.email, password: user.password})
      .then((value) => {
        console.log("Login uid: " + value.uid);
        resultLogin = {"code": "auth/ok", "message": "userid = " + value.uid};
      })
      .catch((error) => {
        console.log("Login Error: " + error.message);
        alert(JSON.stringify(error));
        resultLogin = error;
        this.router.navigate(['error']);
      });
    return resultLogin;
   };

  logout() {
    this.af.auth.logout()
  };

  getActUserID() {
    try {
      let userID = "";
      this.af.auth.subscribe(auth => {userID = auth.uid});
      return userID;
    } catch(e) {
      return "no logged in user";
    }
  };

  getActUserData() {
    try {
      let userData;
      this.af.auth.subscribe(auth => {userData = auth.auth.providerData[0]});
      return userData;
    } catch(e) {
      return "no logged in user";
    }
  };

}
