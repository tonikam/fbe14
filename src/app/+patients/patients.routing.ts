import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PatientsComponent } from "./patients.component";
import { PatientsOverviewComponent } from "./_patients-overview.component";
import { PatientsReadComponent } from "./_patients-read.component";
import { PatientsEditComponent } from "./patients-edit.component";
import { PatientsCreateComponent } from "./_patients-create.component";
import { PatientsNewComponent } from "./patients-new.component";

export const patients_routes: Routes = [
    {
        path: '',
        component: PatientsComponent,
        children: [
            {
                path: '',
                component: PatientsOverviewComponent
            },
            {
                path: 'new',
                component: PatientsCreateComponent
            },
            {
                path: ':patientKey',
                component: PatientsReadComponent
            },
            {
                path: ':patientKey/edit',
                component: PatientsEditComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(patients_routes)],
    exports: [RouterModule]
})
export class PatientsRoutingModule {
}

export const routingComponents = [
    PatientsComponent,
    PatientsOverviewComponent,
    PatientsReadComponent,
    PatientsEditComponent,
    PatientsNewComponent,
    PatientsCreateComponent
];
