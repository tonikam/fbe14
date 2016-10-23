import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CurrentPatient } from "../shared/current-patient.service";

@Component({
  templateUrl: './diseaseCases.component.html'
})
export class DiseaseCasesComponent {

  currentPatientKey: String;

  constructor(private router: Router,
              private currentPatient: CurrentPatient) {

    // on page refresh, goto allPatients

    this.currentPatient.patientKey.subscribe(subKey => {
      console.log("[case - list - constructor] currentPatientKey: " + subKey);
      this.currentPatientKey = "" + subKey;}
    );
    console.log("[case-list] currentPatientKey: " + this.currentPatientKey);

    /*
    if (this.currentPatientKey == "no patient key") {
      this.router.navigate(['/allPatients']);
    }
    */
  };
}
