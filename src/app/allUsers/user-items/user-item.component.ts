import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {HelperService} from "../../shared/helper.service";

@Component({
  selector: 'user-item',
  templateUrl: 'user-item.component.html'
})
export class UserItemComponent {
  @Input() user: any;
  @Input() patient: any;

  constructor(private router: Router,
              private helper: HelperService){
  };

  onEdit() {
    this.helper.setUserID(this.user.$key);
    this.router.navigate(['/allUsers',this.patient.$key,'edit'])
  };

}

