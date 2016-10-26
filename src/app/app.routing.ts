import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AuthModule } from './auth/auth.module';

import { LoginComponent } from "./auth/login.component";
import { RegisterComponent } from "./auth/register.component";

import { UserAdminComponent } from "./userAdmin/user-admin.component";

import { HomeComponent } from "./pages/home.component";
import { LoggedInDataComponent } from "./pages/logged-in-data.component";
import { NotFoundComponent } from "./pages/not-found.component";
import { ErrorComponent } from "./pages/error.component";
import { LinkListComponent } from "./pages/link-list.component";

export const app_routes: Routes = [
  {path: '', component: HomeComponent},
  //{path: '', pathMatch: 'full', redirectTo: '/home'},

  {path: 'home', component: HomeComponent},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'error', component: ErrorComponent},

  {path: 'loggedInData', component: LoggedInDataComponent},
  {path: 'linkList', component: LinkListComponent},

  {path: 'userAdmin', component: UserAdminComponent},

  {path: 'users', loadChildren: 'app/+users/users.module#UsersModule'},
  {path: 'patients/:userKey', loadChildren: 'app/+patients/patients.module#PatientsModule'},
  {path: 'diseaseCases/:patientKey', loadChildren: 'app/+diseaseCases/diseaseCases.module#DiseaseCasesModule'},
  {path: 'diseaseEvents/:patientKey/:diseaseCaseKey', loadChildren: 'app/+diseaseEvents/diseaseEvents.module#DiseaseEventsModule'},



  {path: '**', component: NotFoundComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

export const routedAppComponents = [
  HomeComponent,
  LoggedInDataComponent,
  ErrorComponent
];
