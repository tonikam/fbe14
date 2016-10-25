import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';

import { DataService } from "../shared/data.service";

import { CurrentDiseaseCase} from "../shared/current-disease-case.service";

@Component({
  templateUrl: './diseaseEvents-list.component.html'
})
export class DiseaseEventsListComponent implements OnInit{

  currentDiseaseCaseName: String;
  currentDiseaseCaseKey: String;

  currentDiseaseCaseData: any;

  allDiseaseEvents: Observable<any[]>;
  diseaseEventsCount: Number;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private currentDiseaseCase: CurrentDiseaseCase
  ){

    let text1 = "";
    let text2 = "";
    text1 = "[case-list]";
    text2 = "constructor";
    console.log(text1 + " " + text2);

    /*
    this.currentDiseaseCase.diseaseCaseName.subscribe(subName => {
      console.log("[event - list - constructor] currentDiseaseCaseName: " + subName);
      this.currentDiseaseCaseName = "" + subName;}
    );

    this.currentDiseaseCase.diseaseCaseKey.subscribe(subKey => {
      console.log("[event - list - constructor] currentDiseaseCaseKey: " + subKey);
      this.currentDiseaseCaseKey = "" + subKey;}
    );
    */
    this.route.params.subscribe(
      (params:any) => {
        this.currentDiseaseCaseKey = params['diseaseCaseKey'];

        this.currentDiseaseCase.diseaseCaseData.subscribe(diseaseCaseData => {
          this.currentDiseaseCaseData = diseaseCaseData;
          console.log("[diseaseEvents - list] currentDiseaseCaseData - key: " + this.currentDiseaseCaseData.key);
          console.log("[diseaseEvents - list] currentDiseaseCaseData - name: " + this.currentDiseaseCaseData.name);

          // get name from observable subject for page title
          this.currentDiseaseCaseName = this.currentDiseaseCaseData.name;

          // get key from routing parameters
          this.allDiseaseEvents = this.dataService.getDiseaseEvents(this.currentDiseaseCaseKey);
          if (this.allDiseaseEvents) {
            this.allDiseaseEvents.subscribe((queriedItems) => {
              this.diseaseEventsCount = queriedItems.length;
            });
          }
        });

      });
  };

  ngOnInit() {

  };

}
