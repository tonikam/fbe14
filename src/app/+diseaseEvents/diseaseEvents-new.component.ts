
import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Observable } from 'rxjs';
import { Subscription } from "rxjs/Rx";

import { DataService } from "../shared/data.service";
import { LogService } from "../shared/log.service";

@Component({
  templateUrl: './diseaseEvents-new.component.html'
})
export class DiseaseEventsNewComponent {

  private subscription: Subscription;

  patientKey: String;

  diseaseCaseKey: String;
  diseaseCaseName: String;

  diseaseEventKey: String;
  diseaseEventName: String;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private dataService: DataService,
              private logService: LogService
  ){

    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.diseaseEventKey = params['diseaseEventKey'];
        this.logService.logConsole("diseaseEvents-new", "constructor - diseaseEventKey: ", this.diseaseEventKey);

        this.patientKey = this.route.parent.snapshot.params['patientKey'];
        console.log("diseaseCases new - patientKey: " + this.patientKey);
        this.logService.logConsole("diseaseEvents-new", "constructor - patientKey: ", this.patientKey);

        this.diseaseCaseKey = this.route.parent.snapshot.params['diseaseCaseKey'];
        this.logService.logConsole("diseaseEvents-new", "constructor - diseaseCaseKey: ", this.diseaseCaseKey);

        //this.dataService.getDiseaseCase(this.patientKey, this.diseaseCaseKey).subscribe((diseaseCase) => {
        this.dataService.getDiseaseCasex(this.diseaseCaseKey).subscribe((diseaseCase) => {
          this.diseaseCaseName = diseaseCase.name;

          //this.dataService.getDiseaseEvent( this.diseaseCaseKey, this.diseaseEventKey).subscribe((diseaseEvemt) => {
          this.dataService.getDiseaseEventx(this.diseaseEventKey).subscribe((diseaseEvemt) => {
            this.diseaseEventName = diseaseEvemt.name;

          });
        });
      });
  };

  createDiseaseEvent(key_value) {
    //this.dataService.createDiseaseEvent(this.diseaseCaseKey,key_value);
    this.dataService.createDiseaseEventx(key_value);
    this.goBack();
  };

  goBack() {
    this.location.back();
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  };
}

