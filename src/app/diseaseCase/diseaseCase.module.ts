import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DiseaseCaseComponent } from "./diseaseCase.component";

@NgModule({
    declarations: [
        DiseaseCaseComponent
    ],
    imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class DiseaseCaseModule {}