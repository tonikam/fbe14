import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';

import {DataService} from "../../shared/data.service";
import {async} from "rxjs/scheduler/async";

@Component({
  selector: 'user-items-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {

  allUsers: Observable<any[]>;

  constructor(private router: Router,
              private dataService: DataService) {
    this.allUsers = this.dataService.getAllUsersAndPatients();
  }

  onNew(user) {
    console.log("new: " + user);
    this.router.navigate(['/allUsers','new'])
  }
}

