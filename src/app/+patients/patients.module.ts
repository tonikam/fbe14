import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientsRoutingModule, routingComponents } from "./patients.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PatientsRoutingModule
    ],
    declarations: [
        routingComponents
    ],
    providers: []
})
export class PatientsModule {
}
