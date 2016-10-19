import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AllPatientsRoutingModule, routedAllPatientsComponents} from "./allPatients.routing";

import { PatientListComponent } from "./patient-items/patient-list.component";
import { PatientCaseComponent } from "./patient-items/patient-case.component";
//import { PatientCaseComponent } from "./patient-items/patient-case.component";
import { PatientRowComponent } from "./patient-items/patient-row.component";

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      AllPatientsRoutingModule
    ],
    declarations: [
      PatientListComponent,
      PatientRowComponent,
      PatientCaseComponent,
     // PatientCaseComponent,
      routedAllPatientsComponents
    ],
    providers: [
  ]
})
export class AllPatientsModule {}
