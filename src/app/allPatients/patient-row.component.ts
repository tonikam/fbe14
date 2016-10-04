import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../shared/data.service";

@Component({
  selector: '[patient-row]',
  templateUrl: 'patient-row.component.html'
})
export class PatientRowComponent {
  @Input() patient: any;

  constructor(private router: Router,
              private dataService: DataService){
  };

  onNew() {

  };

}

