import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';

import { AngularFire } from 'angularfire2';

import { UserLogin } from "./user-login.interface";

import { DataService } from "./data.service";

import { LoggedInUser } from "./logged-in-user.service";

import { ErrorHandlerService } from "./error-handler.service";

@Injectable()
export class AuthService {

  constructor(public af:AngularFire,
              private errorHandler:ErrorHandlerService,
              public _loggedInUser: LoggedInUser,
              private dataService: DataService) {

  }

  registerUser(user:UserLogin) {
    this.af.auth.createUser({email: user.email, password: user.password})
      .then((value) => {
        // create entry in users - table with correct uid
        this.af.database.object('/_db2/users/' + value.uid).set({name: user.email, age: 0, role: 10});
        console.log("Registered uid: " + value.uid);
      })
      .catch((error) => {
        console.log("Register Error: " + error.message);
        this.errorHandler.handleError(error);
      });
  };

  loginUser(user:UserLogin) {
    this.af.auth.login({email: user.email, password: user.password})
      .then((value) => {
        console.log("[authService] - loginUser - uid: " + value.uid);
        console.log("[authService] - loginUser - providerData[].uid: " + value.auth.providerData[0].uid);

        this.dataService.setLoggedInUser({
          id: value.uid,
          name: value.auth.providerData[0].uid
        });

        // set Subject Observable
        this._loggedInUser.userName.next(value.auth.providerData[0].uid);

      })
      .catch((error) => {
        console.log("[authService] - login error: " + error.message);
        this.errorHandler.handleError(error);
      });
   };

  logout() {

    // clear logged in user data and logout
    this.dataService.setLoggedInUser({
      id: "",
      name: ""
    });
    this.af.auth.logout()
  };

}
