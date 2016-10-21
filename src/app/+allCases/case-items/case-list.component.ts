import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Observable } from 'rxjs';

import { DataService } from "../../shared/data.service";

import { CurrentPatient } from "../../shared/current-patient.service";

@Component({
  templateUrl: './case-list.component.html'
})
export class DiseaseCaseListComponent implements OnInit{

  //currentPatientIDds: String;
  //currentPatientID: String;

  currentPatientName: String;
  currentPatientKey: String;

  allDiseaseCases: Observable<any[]>;
  diseaseCasesCount: Number;

  constructor(private router: Router,
              private dataService: DataService,
              private currentPatient: CurrentPatient
  ){

    let text1 = "";
    let text2 = "";
    text1 = "[case-list]";
    text2 = "constructor";
    console.log(text1 + " " + text2);

    /*
    this.currentPatientIDds= this.dataService.getLastPatientKey();
    console.log("[case-list] currentPatientIDds: " + this.currentPatientIDds);
    */

    text1 = "";
    text2 = "";
    text1 = "[case-list]";
    text2 = "constructor";
    console.log(text1 + " " + text2);

    this.currentPatient.patientName.subscribe(subName => {
      console.log("[case - list - constructor] currentPatientName: " + subName);
      this.currentPatientName = "" + subName;}
    );

    this.currentPatient.patientKey.subscribe(subKey => {
      console.log("[case - list - constructor] currentPatientKey: " + subKey);
      this.currentPatientKey = "" + subKey;}
    );

    this.allDiseaseCases = this.dataService.getDiseaseCasesWithEvents();
    this.allDiseaseCases.subscribe((queriedItems) => {this.diseaseCasesCount = queriedItems.length});

  };

  ngOnInit() {
    let text1 = "";
    let text2 = "";
    text1 = "[case-list]";
    text2 = "OnInit";
    console.log(text1 + " " + text2);
  };

}
