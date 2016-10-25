import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';

import { DataService } from "../shared/data.service";

import { CurrentPatient } from "../shared/current-patient.service";

@Component({
  templateUrl: './diseaseCases-list.component.html'
})
export class DiseaseCasesListComponent implements OnInit{

  currentPatientName: String;
  currentPatientKey: String;

  currentPatientData: any;

  allDiseaseCases: Observable<any[]>;
  diseaseCasesCount: Number;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private currentPatient: CurrentPatient
  ){

    this.route.params.subscribe(
      (params:any) => {
        this.currentPatientKey = params['patientKey'];

        this.currentPatient.patientData.subscribe(patientData => {
          this.currentPatientData = patientData;
          console.log("[diseaseCases - list] currentPatientData - key: " + this.currentPatientData.key);
          console.log("[diseaseCases - list] currentPatientData - name: " + this.currentPatientData.name);

          // get name from observable subject for page title
          this.currentPatientName = this.currentPatientData.name;

          // get key from routing parameters
          this.allDiseaseCases = this.dataService.getDiseaseCases(this.currentPatientData.key);
          if (this.allDiseaseCases) {
            this.allDiseaseCases.subscribe((queriedItems) => {
              this.diseaseCasesCount = queriedItems.length;
            });
          }
        });
      });
  };

  ngOnInit() {

  };

}
