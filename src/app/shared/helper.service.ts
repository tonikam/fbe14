import { Injectable } from "@angular/core";

@Injectable()
export class HelperService {

  private userID: String;

  constructor() {

  }

  setUserID(userID) {
    this.userID = userID;
  };

  getUserID(){
    return this.userID;
  }

}
