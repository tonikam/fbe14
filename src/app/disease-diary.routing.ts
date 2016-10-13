import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AuthModule } from './auth/auth.module';

import { LoginComponent } from "./auth/login.component";
import { RegisterComponent } from "./auth/register.component";

import { HomeComponent } from "./home.component";
import { TestComponent } from "./test.component";
import { WrongLinkComponent } from "./wrong-link.component";
import { ErrorComponent } from "./error.component";

import { UserComponent } from "./user/user.component";
import { DiseasePatientComponent } from "./patient/patient.component";
import { DiseaseCaseComponent } from "./diseaseCase/diseaseCase.component";
import { DiseaseEventComponent } from "./diseaseEvent/diseaseEvent.component";

import { PatientListComponent } from "./allPatients/patient-list.component";

export const app_routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'error', component: ErrorComponent},

  {path: 'test', component: TestComponent},

  {path: 'user', component: UserComponent, canActivate: []},
  {path: 'patient', component: DiseasePatientComponent},
  {path: 'case', component: DiseaseCaseComponent},
  {path: 'event', component: DiseaseEventComponent},

  {path: 'allUsers', loadChildren: 'app/+allUsers/allUsers.module#AllUsersModule'},

  {path: 'allPatients', component: PatientListComponent},

  {path: '**', component: WrongLinkComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})

export class DiseaseRoutingModule{}

export const routedDiseaseComponents = [
  HomeComponent,
  TestComponent,
  ErrorComponent,
  UserComponent,
  DiseasePatientComponent,
  DiseaseCaseComponent,
  DiseaseEventComponent
];
