import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-patien',
  templateUrl: './patient.component.html'
})
export class PatientComponent {

  patients: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.patients = af.database.list('patients');
  }

}
