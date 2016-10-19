import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';

import {DataService} from "../../shared/data.service";

@Component({
  // selector: 'user-items-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {

  allUsers: Observable<any[]>;
  allUsersCount: Number;

  //constructor(private router: Router,
  constructor(private dataService: DataService) {
    this.allUsers = this.dataService.getAllUsersAndPatients();

    this.allUsers.subscribe((queriedItems) => {this.allUsersCount = queriedItems.length});
  }

  /*
  onNew(user) {
    console.log("new: " + user);
    this.router.navigate(['/allUsers','new'])
  }
  */

  /*
  createPatient(user_key,key_value) {
    this.dataService.createPatient(user_key,key_value)
  };
  */
}

