import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllPatientsComponent } from "./allPatients.component";

@NgModule({
    declarations: [
        AllPatientsComponent
    ],
    imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class AllPatientsModule {}
