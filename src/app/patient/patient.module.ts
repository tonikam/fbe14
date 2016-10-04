import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DiseasePatientComponent } from "./patient.component";

@NgModule({
    declarations: [
        DiseasePatientComponent
    ],
    imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class DiseasePatientModule {}
