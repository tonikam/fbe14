import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {AllDiseaseCasesComponent} from "./allCases.component";
import {DiseaseCaseListComponent} from "./case-items/case-list.component";
import {DiseaseCaseStartComponent} from "./case-start.component";

export const allDiseaseCases_routes: Routes = [
  { path: '', component: AllDiseaseCasesComponent, children: [
    { path: '', component: DiseaseCaseListComponent }
  ]}
];

@NgModule ({
  imports: [RouterModule.forChild(allDiseaseCases_routes)],
  exports: [RouterModule]
})

export class AllDiseaseCasesRoutingModule{}

export const routedAllDiseaseCasesComponents = [
  AllDiseaseCasesComponent,
  DiseaseCaseStartComponent
];

