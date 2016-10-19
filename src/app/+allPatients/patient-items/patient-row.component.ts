import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import {DataService} from "../../shared/data.service";

@Component({
  selector: '[patient-row]',
  templateUrl: 'patient-row.component.html'
})
export class PatientRowComponent implements OnInit {
  @Input() patient: any;

  patientKey: String;

  constructor(private router: Router,
              private dataService: DataService){
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

    let test = this.dataService.getLastPatientKey();
    console.log("[patient-row] get patientKey: " + test);

    this.router.navigate(['/allDiseaseCases'])
  }
}

