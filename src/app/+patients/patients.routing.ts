import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PatientsComponent } from "./patients.component";
import { PatientsListComponent } from "./patients-list.component";
import { PatientsItemComponent } from "./patients-item.component";
import { PatientsEditComponent } from "./patients-edit.component";
import { PatientsCreateComponent } from "./patients-create.component";

export const patients_routes: Routes = [
  { path: '', component: PatientsComponent, children: [
    { path: '', component: PatientsListComponent },
    { path: ':patientKey/edit', component: PatientsEditComponent },
    { path: 'create', component: PatientsCreateComponent },

    //{ path: ':patientKey/diseaseCases', loadChildren: 'app/+diseaseCases/diseaseCases.module#DiseaseCasesModule'},
    { path: ':patientKey', loadChildren: 'app/+diseaseCases/diseaseCases.module#DiseaseCasesModule'},
  ]}
];

@NgModule ({
  imports: [RouterModule.forChild(patients_routes)],
  exports: [RouterModule]
})

export class PatientsRoutingModule{}

export const routingComponents = [
  PatientsComponent,
  PatientsListComponent,
  PatientsItemComponent,
  PatientsEditComponent,
  PatientsCreateComponent
];

