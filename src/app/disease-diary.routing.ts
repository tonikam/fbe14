import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AuthModule } from './auth/auth.module';

import { LoginComponent } from "./auth/login.component";
import { RegisterComponent } from "./auth/register.component";

import { HomeComponent } from "./home.component";
import { LoggedInDataComponent } from "./logged-in-data.component";
import { WrongLinkComponent } from "./wrong-link.component";
import { ErrorComponent } from "./error.component";
import { GitLinkComponent } from "./git-link.component";

import { UserComponent } from "./user/user.component";

//import { DiseasePatientComponent } from "./patient/patient.component";
//import { DiseaseCaseComponent } from "./diseaseCase/diseaseCase.component";
//import { DiseaseEventComponent } from "./diseaseEvent/diseaseEvent.component";

export const app_routes: Routes = [
  {path: '', component: HomeComponent},
  //{path: '', pathMatch: 'full', redirectTo: '/home'},

  {path: 'home', component: HomeComponent},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'error', component: ErrorComponent},

  {path: 'loggedInData', component: LoggedInDataComponent},
  {path: 'git', component: GitLinkComponent},

  {path: 'user', component: UserComponent, canActivate: []},

  /*
  {path: 'patient', component: DiseasePatientComponent},
  {path: 'case', component: DiseaseCaseComponent},
  {path: 'event', component: DiseaseEventComponent},
  */

  {path: 'allUsers', loadChildren: 'app/+allUsers/allUsers.module#AllUsersModule'},
  {path: 'allPatients', loadChildren: 'app/+allPatients/allPatients.module#AllPatientsModule'},
  {path: 'allDiseaseCases', loadChildren: 'app/+allCases/allCases.module#AllDiseaseCasesModule'},

  {path: '**', component: WrongLinkComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})

export class DiseaseRoutingModule{}

export const routedDiseaseComponents = [
  HomeComponent,
  LoggedInDataComponent,
  ErrorComponent,
  UserComponent  //,
  //DiseasePatientComponent,
  //DiseaseCaseComponent,
  //DiseaseEventComponent
];
