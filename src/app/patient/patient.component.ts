import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: './patient.component.html'
})
export class PatientComponent {

  patients: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.patients = af.database.list('patients');
  }

  addPatient(newName: string) {
    this.patients.push({ name: newName });
  }
  updatePatient(key: string, newText: string) {
    this.patients.update(key, { name: newText });
  }
  deletePatient(key: string) {
    this.patients.remove(key);
  }
  deletePatientAll() {
    //this.patients.remove();
  }

}
