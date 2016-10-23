import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CurrentDiseaseCase } from "../shared/current-disease-case.service";

@Component({
  templateUrl: './diseaseEvents.component.html'
})
export class DiseaseEventsComponent {

  currentCaseKey: String;

  constructor(private router: Router,
              private currentDiseaseCase: CurrentDiseaseCase) {

    this.currentDiseaseCase.diseaseCaseKey.subscribe(subKey => {
      console.log("[case - list - constructor] currentCaseKey: " + subKey);
      this.currentCaseKey = "" + subKey;}
    );

  };
}
