import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Observable } from 'rxjs';

import { DataService } from "../shared/data.service";

import { CurrentDiseaseCase} from "../shared/current-disease-case.service";

@Component({
  templateUrl: './diseaseEvents-list.component.html'
})
export class DiseaseEventsListComponent implements OnInit{

  currentDiseaseCaseName: String;
  currentDiseaseCaseKey: String;

  allDiseaseEvents: Observable<any[]>;
  diseaseEventsCount: Number;

  constructor(private router: Router,
              private dataService: DataService,
              private currentDiseaseCase: CurrentDiseaseCase
  ){

    let text1 = "";
    let text2 = "";
    text1 = "[case-list]";
    text2 = "constructor";
    console.log(text1 + " " + text2);

    this.currentDiseaseCase.diseaseCaseName.subscribe(subName => {
      console.log("[event - list - constructor] currentDiseaseCaseName: " + subName);
      this.currentDiseaseCaseName = "" + subName;}
    );

    this.currentDiseaseCase.diseaseCaseKey.subscribe(subKey => {
      console.log("[event - list - constructor] currentDiseaseCaseKey: " + subKey);
      this.currentDiseaseCaseKey = "" + subKey;}
    );

    this.allDiseaseEvents = this.dataService.getDiseaseEvents();
    this.allDiseaseEvents.subscribe((queriedItems) => {
      this.diseaseEventsCount = queriedItems.length;
      console.log("[event - list - constructor] diseaseEventsCount : " + this.diseaseEventsCount);
    });

  };

  ngOnInit() {
    let text1 = "";
    let text2 = "";
    text1 = "[case-list]";
    text2 = "OnInit";
    console.log(text1 + " " + text2);
  };

}
