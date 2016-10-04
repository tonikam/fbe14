import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DataService} from "../shared/data.service";

import { AllPatientsComponent } from "./allPatients.component";
import { AllPatientsRowComponent } from "./allPatientsRow.component";

@NgModule({
    declarations: [
      AllPatientsComponent,
      AllPatientsRowComponent
    ],
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule],
    providers: [
    DataService
  ]
})
export class AllPatientsModule {}
