import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {DiseaseCasesComponent} from "./diseaseCases.component";
import {DiseaseCasesListComponent} from "./diseaseCases-list.component";

export const diseaseCases_routes: Routes = [
  { path: '', component: DiseaseCasesComponent, children: [
    { path: '', component: DiseaseCasesListComponent }
  ]}
];

@NgModule ({
  imports: [RouterModule.forChild(diseaseCases_routes)],
  exports: [RouterModule]
})

export class DiseaseCasesRoutingModule{}

export const routedDiseaseCasesComponents = [
  DiseaseCasesComponent
];

