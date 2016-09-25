import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientComponent } from "./patient.component";

@NgModule({
    declarations: [
        PatientComponent
    ],
    imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class PatientModule {}
