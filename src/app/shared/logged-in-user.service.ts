import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Rx";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class LoggedInUser {

  public userName: Subject<string> = new BehaviorSubject<string>("no user");

  setUserName(text:string) {
    this.userName.next(text);
  }

}
