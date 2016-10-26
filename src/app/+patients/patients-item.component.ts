import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { CurrentPatient } from "../shared/current-patient.service";

@Component({
  selector: '[patients-item]',
  templateUrl: 'patients-item.component.html'
})
export class PatientsItemComponent implements OnInit {
  @Input() patient: any;

  patientKey: String;

  constructor(private router: Router,
              private currentPatient: CurrentPatient){
  };

  ngOnInit() {
    this.patientKey = this.patient.$key;
  };

  editPatient(patientKey) {
    this.router.navigate(['patients/' + patientKey + '/edit']);
  };
}

