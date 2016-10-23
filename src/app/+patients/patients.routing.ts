import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {PatientsComponent} from "./patients.component";
import {PatientsListComponent} from "./patients-list.component";
import {PatientsStartComponent} from "./patients-start.component";

export const patients_routes: Routes = [
  { path: '', component: PatientsComponent, children: [
    { path: '', component: PatientsListComponent }


    //,
    //{ path: ':userKey/new', component: UserNewComponent },
    ////{ path: ':userKey/new', component: UserNewModalComponent },
    //{ path: ':patientKey/edit', component: UserEditComponent }
  ]}
];

@NgModule ({
  imports: [RouterModule.forChild(patients_routes)],
  exports: [RouterModule]
})

export class PatientsRoutingModule{}

export const routedPatientsComponents = [
  PatientsComponent,
  PatientsStartComponent //,
  //UserEditComponent,
  //UserNewComponent
];

