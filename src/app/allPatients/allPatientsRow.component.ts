/*
import { Component, Input } from '@angular/core';

@Component({
  selector: "patient-item",
  templateUrl: './allPatientsRow.component.html'
})
export class AllPatientsRowComponent {

  @Input() case;
}
*/

import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../shared/data.service";

@Component({
  //selector: 'user-item',
  selector: '[patient-item]',
  templateUrl: 'allPatientsRow.component.html'
})
export class AllPatientsRowComponent {
  @Input() patient: any;
  @Input() case: any;

  constructor(private router: Router,
              private dataService: DataService){
  };

  onEdit() {

  };

}

