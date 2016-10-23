import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../shared/data.service";

import { CurrentPatient } from "../shared/current-patient.service";

@Component({
  selector: '[patients-item]',
  templateUrl: 'patients-item.component.html'
})
export class PatientsItemComponent implements OnInit {
  @Input() patient: any;

  patientKey: String;

  constructor(private router: Router,
              private dataService: DataService,
              private currentPatient: CurrentPatient){
  };

  ngOnInit() {
    this.patientKey = this.patient.$key;
  }

  createDiseaseCase(key_value) {
    this.dataService.createDiseaseCase(this.patient.$key,key_value)
  };

  openDiseaseCases(patientKey) {
    console.log("[patient-row] patientKey: " + patientKey);

    this.dataService.setLastPatientKey(patientKey);

    this.dataService.setLastDiseaseCaseKey("");

    // set Subject Observable
    this.currentPatient.setPatientName(this.patient.name);
    console.log("[patient-row] set observable patientName: " + this.patient.name);

    this.currentPatient.setPatientKey(this.patient.$key);
    console.log("[patient-row] set observable patientName: " + this.patient.$key);

    this.router.navigate(['/diseaseCases'])
  }
}

