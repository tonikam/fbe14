import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllPatientsComponent } from "./allPatients.component";
import { AllPatientsRowComponent } from "./allPatientsRow.component";

@NgModule({
    declarations: [
      AllPatientsComponent,
      AllPatientsRowComponent
    ],
    imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class AllPatientsModule {}
