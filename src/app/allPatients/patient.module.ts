import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DataService} from "../shared/data.service";

import { PatientListComponent } from "./patient-list.component";
import { PatientCaseComponent } from "./patient-case.component";
import { PatientRowComponent } from "./patient-row.component";

@NgModule({
    declarations: [
      PatientListComponent,
      PatientRowComponent,
      PatientCaseComponent
    ],
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule],
    providers: [
      DataService
  ]
})
export class PatientModule {}
