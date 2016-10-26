import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {DiseaseCasesComponent} from "./diseaseCases.component";
import {DiseaseCasesListComponent} from "./diseaseCases-list.component";
import {DiseaseCasesEditComponent} from "./diseaseCases-edit.component";
import {DiseaseCasesNewComponent} from "./diseaseCases-new.component";

export const diseaseCases_routes: Routes = [
  { path: '', component: DiseaseCasesComponent, children: [
    { path: '', component: DiseaseCasesListComponent },
    { path: ':diseaseCaseKey/edit', component: DiseaseCasesEditComponent },
    { path: 'new', component: DiseaseCasesNewComponent }
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

