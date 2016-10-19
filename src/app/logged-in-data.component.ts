import { Component, OnChanges } from '@angular/core';

import { Observable } from 'rxjs';
import {async} from "rxjs/scheduler/async";

import {AuthService} from "./shared/auth.service";
import {DataService} from "./shared/data.service";


@Component({
  templateUrl: './logged-in-data.component.html'
})

export class LoggedInDataComponent {

  private loggedInUserID: String;
  private loggedInUserData: any;
  private lastManagedUser: Observable<any>;

  constructor(private dataService: DataService,
              private authService: AuthService){

    this.getData();
  };

  getData(){
    this.loggedInUserID = this.authService.getActUserID();
    this.loggedInUserData = this.authService.getActUserData();
    this.lastManagedUser = this.dataService.getLastManagedUser();
    console.log("[getData] UserDataComponent");
  };
}
