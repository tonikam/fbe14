import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DiseaseEventComponent } from "./diseaseEvent.component";

@NgModule({
    declarations: [
        DiseaseEventComponent
    ],
    imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class DiseaseEventModule {}