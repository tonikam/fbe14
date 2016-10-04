
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../shared/data.service";

@Component({
  selector: '[patient-item]',
  templateUrl: 'patient-case.component.html'
})
export class PatientCaseComponent {
  @Input() patient: any;
  @Input() case: any;

  constructor(private router: Router,
              private dataService: DataService){
  };

  onEdit() {

  };

}

