import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'user-items-list',
  templateUrl: './user-items.component.html',
})
export class UserItemsComponent {

  allUsers: Observable<any[]>;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.allUsers = this.af.database.list('/_db2/users', {query: {orderByKey: true}})
      .map((allUsers) => {
        return allUsers.map((user) => {
          user.patients = this.af.database.list(`/_db2/patients/${user.$key}`, {query: {orderByKey: true}})
          return user;
        });
      });
  }
}

