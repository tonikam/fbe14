import { Component, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import { DataService } from "../../shared/data.service";

@Component({
  templateUrl: 'user-new-modal.component.html'
})
export class UserNewModalComponent {

  private subscription: Subscription;

  private userKey: String;
  private user: Observable<any>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService){

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.userKey = params['userKey'];
        this.user = this.dataService.getCachedUserData(this.userKey);
      });
  };

  createPatient(key_value) {
    this.dataService.createPatient(this.userKey,key_value)
  };

  /*
  showNewModalDialog(user) {
    this.user = user;
  };
  */

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  };
}

