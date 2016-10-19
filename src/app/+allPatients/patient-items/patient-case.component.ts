import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DataService } from "../../shared/data.service";

@Component({
  selector: '[patient-diseaseCase]',
  templateUrl: 'patient-case.component.html'
})
export class PatientCaseComponent implements OnInit {
  @Input() patient: any;
  @Input() diseaseCase: any;

  isSuccessVisible: boolean;
  isWarningVisible: boolean;

  diseaseCaseKey: String;

  constructor(private router: Router,
              private dataService: DataService){

    this.isWarningVisible = this.checkDiseaseCaseStatus();
  };

  ngOnInit(){
    this.diseaseCaseKey = this.diseaseCase.$key;
  }

  updateDiseaseCase(key_value) {
    this.dataService.updateDiseaseCase(this.patient.$key, this.diseaseCase.$key, key_value)
  };

  checkDiseaseCaseStatus() {
    // checking case status of patient
    return false;
  };

  openDiseaseCase(diseaseCaseKey) {
    console.log("[patient-case] diseaseCaseKey: " + diseaseCaseKey);
    this.dataService.setLastPatientKey(this.patient.$key);
    this.dataService.setLastDiseaseCaseKey(diseaseCaseKey);

    let test = this.dataService.getLastDiseaseCaseKey();
    console.log("[patient-case] get diseaseCaseKey: " + test);

    this.router.navigate(['/allDiseaseCases'])
  }
}

