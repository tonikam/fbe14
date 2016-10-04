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
  private userID: String;
  private userObj: Observable<any>;

  constructor(private dataService: DataService,
              private authService: AuthService){
    this.getData();
  };

  getData(){
    this.test = this.dataService.getTest();
    this.userID = this.authService.getActUserID();
    this.userObj = this.dataService.getActUser();

    let x = 123;
  };
}
