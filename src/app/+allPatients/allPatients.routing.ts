import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {AllPatientsComponent} from "./allPatients.component";
import {PatientListComponent} from "./patient-items/patient-list.component";
import {PatientStartComponent} from "./patient-start.component";

export const allPatients_routes: Routes = [
  { path: '', component: AllPatientsComponent, children: [
    { path: '', component: PatientListComponent }


    //,
    //{ path: ':userKey/new', component: UserNewComponent },
    ////{ path: ':userKey/new', component: UserNewModalComponent },
    //{ path: ':patientKey/edit', component: UserEditComponent }
  ]}
];

@NgModule ({
  imports: [RouterModule.forChild(allPatients_routes)],
  exports: [RouterModule]
})

export class AllPatientsRoutingModule{}

export const routedAllPatientsComponents = [
  AllPatientsComponent,
  PatientStartComponent //,
  //UserEditComponent,
  //UserNewComponent
];

