import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../../shared/data.service";

@Component({
  selector: '[user-patient]',
  templateUrl: 'user-patient.component.html'
})
export class UserPatientComponent {
  @Input() user: any;
  @Input() patient: any;

  constructor(private router: Router,
              private dataService: DataService){
  };

  onEdit() {
    this.dataService.setCachedUserID(this.user.$key);
    this.router.navigate(['/allUsers',this.patient.$key,'edit'])
  };

}

