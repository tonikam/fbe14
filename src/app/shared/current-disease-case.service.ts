
import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Rx";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class CurrentDiseaseCase {

  public diseaseCaseName: Subject<string> = new BehaviorSubject<string>("no disease case");
  public diseaseCaseKey: Subject<string> = new BehaviorSubject<string>("no disease case key");

  setDiseaseCaseName(text:string) {
    this.diseaseCaseName.next(text);
  }
  setDiseaseCaseKey(text:string) {
    this.diseaseCaseKey.next(text);
  }

}
