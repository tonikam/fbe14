import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';

import { AngularFire } from 'angularfire2';
import { FirebaseAuthState } from "angularfire2/index";

import { UserLogin } from "./user-login.interface";

import { ErrorHandlerService } from "./error-handler.service";
import { LogService } from "./log.service";

@Injectable()
export class AuthService {

  userData: any;

  constructor(public af:AngularFire,
              private errorHandler:ErrorHandlerService,
              private logService: LogService
  ) {

  }

  registerUser(user:UserLogin) {
    this.af.auth.createUser({email: user.email, password: user.password})
      .then((auth) => {

        // create entry in users - table with auth uid
        this.af.database.object('/_db2/users/' + auth.uid).set({name: user.email, age: 0, role: 10});
        console.log("Registered uid: " + auth.uid);
      })
      .catch((error) => {
        console.log("Register Error: " + error.message);
        this.errorHandler.handleError(error);
      });
  };

  loginUser(user:UserLogin) {
    this.af.auth.login({email: user.email, password: user.password})
      .then((auth) => {
        console.log("[authService] - loginUser - uid: " + auth.uid);
        console.log("[authService] - loginUser - providerData[].uid: " + auth.auth.providerData[0].uid);
      })
      .catch((error) => {
        console.log("[authService] - login error: " + error.message);
        this.errorHandler.handleError(error);
      });
   };

  logout() {
    this.af.auth.logout();
  };

}
