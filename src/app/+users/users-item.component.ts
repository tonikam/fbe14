import { Component, Input, OnInit } from '@angular/core'; //, AfterViewInit, ViewChild
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../shared/data.service";

@Component({
  selector: '[users-item]',
  templateUrl: 'users-item.component.html'
})
export class UsersItemComponent implements OnInit { // implements AfterViewInit {
  @Input() user: any;

  userKey: String;

  constructor(private router: Router,
              private dataService: DataService){
  };

  ngOnInit() {
    this.userKey = this.user.$key;
  }

  /*
  onNew() {
    this.router.navigate(['/allUsers',this.user.$key,'new'])
    //this.newPatientModal.showNewModalDialog(this.user);
  };
  */

  createPatient(key_value) {
    this.dataService.createPatientx(key_value)
  };

}

