import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import {DataService} from "../../shared/data.service";

@Component({
  selector: 'user-items-list',
  templateUrl: './user-items.component.html',
})
export class UserItemsComponent {

  allUsers: Observable<any[]>;

  constructor(private dataService: DataService) {
    this.allUsers = this.dataService.getAllUsersAndPatients();
  }

}

