import { Component, OnChanges } from '@angular/core';

import {DataService} from "./shared/data.service";

@Component({
  templateUrl: './logged-in-data.component.html'
})

export class LoggedInDataComponent {

  private loggedInUserID: String;
  private loggedInUserName: String;

  constructor(private dataService: DataService){
    this.getData();
  };

  getData(){
    let loggedInUserData = this.dataService.getLoggedInUser();

    if (loggedInUserData != undefined) {
      this.loggedInUserID = loggedInUserData.id;
      this.loggedInUserName = loggedInUserData.name;
    } else {
      this.loggedInUserID = "N/A";
      this.loggedInUserName = "N/A";
    }
  };
}
