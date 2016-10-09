import { Injectable } from "@angular/core";

import { Router } from "@angular/router";

import { AngularFire } from 'angularfire2';
import { AngularFireAuth } from "angularfire2/index";

import { User } from "./user.interface";

import {ErrorHandlerService} from "./error-handler.service";

@Injectable()
export class AuthService {

  constructor(public af:AngularFire, private router:Router, private errorHandler:ErrorHandlerService) {
  }

  registerUser(user:User) {
    this.af.auth.createUser({email: user.email, password: user.password})
      .then((value) => {
        // create entry in users - table with correct uid
        this.af.database.object('/_db2/users/' + value.uid).set({name: user.email, age: 0});
        console.log("Registered uid: " + value.uid);
      })
      .catch((error) => {
        console.log("Register Error: " + error.message);
        this.errorHandler.handleError(error);
      });
  };

  loginUser(user:User) {
    this.af.auth.login({email: user.email, password: user.password})
      .then((value) => {
        console.log("Login uid: " + value.uid);
      })
      .catch((error) => {
        console.log("Login Error: " + error.message);
        this.errorHandler.handleError(error);
      });
  };

  logout() {
    this.af.auth.logout()
  };

  getActUserID() {
    try {
      let userID = "";
      this.af.auth.subscribe(auth => {
        userID = auth.uid
      });
      return userID;
    } catch (e) {
      return "no logged in user";
    }
  };

  getActUserData() {
    try {
      let userData;
      this.af.auth.subscribe(auth => {
        userData = auth.auth.providerData[0]
      });
      return userData;
    } catch (e) {
      return "no logged in user";
    }
  };

}
