import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Rx";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class LoggedInUser {

  public userData: Subject<any> = new BehaviorSubject<any>({name: "no name", key: "no key"});

  setUserData(data: any) {
    console.log("logged-in-user-service: data = " + data.key + " - " + data.name);
    this.userData.next(data);
  };
}
