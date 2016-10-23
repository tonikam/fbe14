import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {PatientsRoutingModule, routedPatientsComponents} from "./patients.routing";

import { PatientsListComponent } from "./patients-list.component";
import { PatientsItemComponent } from "./patients-item.component";

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      PatientsRoutingModule
    ],
    declarations: [
      PatientsListComponent,
      PatientsItemComponent,
      routedPatientsComponents
    ],
    providers: [
  ]
})
export class PatientsModule {}
