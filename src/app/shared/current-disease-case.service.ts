
import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Rx";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class CurrentDiseaseCase {

  public diseaseCaseData: Subject<any> = new BehaviorSubject<any>("no disease case data");

  setDiseaseCaseData(data: any) {
    console.log("current-disease-case-service: data = " + data.key + " - " + data.name);
    this.diseaseCaseData.next(data);
  };

}
