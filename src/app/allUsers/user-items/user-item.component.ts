import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../../shared/data.service";

@Component({
  //selector: 'user-item',
  selector: '[user-item]',
  templateUrl: 'user-item.component.html'
})
export class UserItemComponent {
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

