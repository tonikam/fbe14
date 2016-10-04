import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import {AuthService} from "./shared/auth.service";
import {DataService} from "./shared/data.service";

@Component({
  templateUrl: './test.component.html',
  styles: []
})

export class TestComponent {

  private test: Observable<any>;
  private loggedInUserID: String;
  private loggedInUserData: any;
  private actAppUser: Observable<any>;

  constructor(private dataService: DataService,
              private authService: AuthService){
    this.getData();
  };

  getData(){
    this.test = this.dataService.getTest();
    this.loggedInUserID = this.authService.getActUserID();
    this.loggedInUserData = this.authService.getActUserData();
    this.actAppUser = this.dataService.getActAppUser();

    let x = 123;
  };
}
