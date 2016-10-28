import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { DiseaseCasesComponent } from "./diseaseCases.component";
import { DiseaseCasesListComponent } from "./diseaseCases-list.component";
import { DiseaseCasesItemComponent } from "./diseaseCases-item.component";
import { DiseaseCasesEditComponent } from "./diseaseCases-edit.component";
import { DiseaseCasesNewComponent } from "./diseaseCases-new.component";

export const diseaseCases_routes: Routes = [
  { path: '', component: DiseaseCasesComponent, children: [
    { path: '', component: DiseaseCasesListComponent },
    { path: 'diseaseCases/:diseaseCaseKey/edit', component: DiseaseCasesEditComponent },
    { path: 'new', component: DiseaseCasesNewComponent },

    // parent.params werden nicht gefunden
    // # 1 { path: 'diseaseCases/:diseaseCaseKey', loadChildren: 'app/+diseaseEvents/diseaseEvents.module#DiseaseEventsModule'},

    // parent.params werden gefunden -> aber nur wenn diese Route im Basis-Routing Modul ist -> siehe dort..
    // # 2 { path: '/patients/:patientKey/diseaseCases/:diseaseCaseKey', loadChildren: 'app/+diseaseEvents/diseaseEvents.module#DiseaseEventsModule'},
  ]}
];

@NgModule ({
  imports: [RouterModule.forChild(diseaseCases_routes)],
  exports: [RouterModule]
})

export class DiseaseCasesRoutingModule{}

export const routingComponents = [
  DiseaseCasesComponent,
  DiseaseCasesListComponent,
  DiseaseCasesItemComponent,
  DiseaseCasesEditComponent,
  DiseaseCasesNewComponent
];

