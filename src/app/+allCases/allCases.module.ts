import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AllDiseaseCasesRoutingModule, routedAllDiseaseCasesComponents} from "./allCases.routing";

import { DiseaseCaseListComponent } from "./case-items/case-list.component";
import { DiseaseCaseDiseaseEventComponent } from "./case-items/case-event.component";
import { DiseaseCaseRowComponent } from "./case-items/case-row.component";

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      AllDiseaseCasesRoutingModule
    ],
    declarations: [
      DiseaseCaseListComponent,
      DiseaseCaseRowComponent,
      DiseaseCaseDiseaseEventComponent,
      routedAllDiseaseCasesComponents
    ],
    providers: [
  ]
})
export class AllDiseaseCasesModule {}
