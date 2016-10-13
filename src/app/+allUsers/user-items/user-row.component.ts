import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../../shared/data.service";

@Component({
  selector: '[user-row]',
  templateUrl: 'user-row.component.html'
})
export class UserRowComponent {
  @Input() user: any;

  constructor(private router: Router,
              private dataService: DataService){
  };

  onNew() {
    this.router.navigate(['/allUsers',this.user.$key,'new'])
  };

}

