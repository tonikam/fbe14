import { Component, Input, OnInit } from '@angular/core'; //, AfterViewInit, ViewChild
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../../shared/data.service";

//import { UserNewModalComponent } from "./user-new-modal.component";

@Component({
  selector: '[user-row]',
  templateUrl: 'user-row.component.html'
})
export class UserRowComponent implements OnInit { // implements AfterViewInit {
  @Input() user: any;

  userKey: String;

  //@ViewChild(UserNewModalComponent) newPatientModal

  constructor(private router: Router,
              private dataService: DataService){
  };

  ngOnInit() {
    this.userKey = this.user.$key;
  }

  /*
  ngAfterViewInit() {
    console.log(this.newPatientModal);
  };
  */

  onNew() {
    this.router.navigate(['/allUsers',this.user.$key,'new'])
    //this.newPatientModal.showNewModalDialog(this.user);
  };

  createPatient(key_value) {
    this.dataService.createPatient(this.user.$key,key_value)
  };

}

