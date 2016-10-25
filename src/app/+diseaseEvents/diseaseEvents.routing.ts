import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {DiseaseEventsComponent} from "./diseaseEvents.component";
import {DiseaseEventsListComponent} from "./diseaseEvents-list.component";

export const diseaseEvents_routes: Routes = [
  { path: '', component: DiseaseEventsComponent, children: [
    { path: '', component: DiseaseEventsListComponent }
  ]}
];

@NgModule ({
  imports: [RouterModule.forChild(diseaseEvents_routes)],
  exports: [RouterModule]
})

export class DiseaseEventsRoutingModule{}

export const routedDiseaseEventsComponents = [
  DiseaseEventsComponent

];

