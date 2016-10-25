
import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Rx";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class CurrentPatient {

  public patientData: Subject<any> = new BehaviorSubject<any>("no patient data");

  setPatientData(data: any) {
    console.log("current-patient-service: data = " + data.key + " - " + data.name);
    this.patientData.next(data);
  };

}
