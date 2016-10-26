
import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import { DataService } from "../shared/data.service";

import { CurrentDiseaseCase } from "../shared/current-disease-case.service";

@Component({
  templateUrl: './diseaseEvents-new.component.html'
})
export class DiseaseEventsNewComponent {

  private subscription: Subscription;

  diseaseEventKey: String;
  diseaseEventName: String;

  currentDiseaseCaseData: any;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private dataService: DataService,
              private currentDiseaseCase: CurrentDiseaseCase){

    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.diseaseEventKey = params['diseaseEventKey'];

        this.currentDiseaseCase.diseaseCaseData.subscribe(diseaseCaseData => {
          this.currentDiseaseCaseData = diseaseCaseData;

          this.dataService.getDiseaseEvent(this.currentDiseaseCaseData.key, this.diseaseEventKey).subscribe((diseaseEvemt) => {
            this.diseaseEventName = diseaseEvemt.name;

          });
        });
      });
  };

  createDiseaseEvent(key_value) {
    this.dataService.createDiseaseEvent(this.currentDiseaseCaseData.key,key_value);
    this.goBack();
  };

  goBack() {
    this.location.back();
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  };
}

