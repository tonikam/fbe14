
import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Rx";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class CurrentPatient {

  public patientName: Subject<string> = new BehaviorSubject<string>("no patient");
  public patientKey: Subject<string> = new BehaviorSubject<string>("no patient key");

  setPatientName(text:string) {
    this.patientName.next(text);
  }
  setPatientKey(text:string) {
    this.patientKey.next(text);
  }

}
