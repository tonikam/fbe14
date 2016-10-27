import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: '[patients-item]',
  templateUrl: 'patients-item.component.html'
})
export class PatientsItemComponent {
  @Input() patient: any;

  constructor(private router: Router){
  };

  editPatient(patientKey) {
    this.router.navigate(['patients/' + patientKey + '/edit']);
  };
}

