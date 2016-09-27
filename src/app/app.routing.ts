import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./auth/login.component";
import { RegisterComponent } from "./auth/register.component";
import { HomeComponent } from "./home.component";
import { TestComponent } from "./test.component";
import { UserComponent } from "./user/user.component";
import { PatientComponent } from "./patient/patient.component";
import { DiseaseCaseComponent } from "./diseaseCase/diseaseCase.component";
import { DiseaseEventComponent } from "./diseaseEvent/diseaseEvent.component";

import { AllUsersComponent } from "./allUsers/allUsers.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'test', component: TestComponent},
  {path: 'user', component: UserComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'case', component: DiseaseCaseComponent},
  {path: 'event', component: DiseaseEventComponent},
  {path: 'allUsers', component: AllUsersComponent}
];

export const appRoutingProviders : any[] = [

];

export const routing = RouterModule.forRoot(APP_ROUTES);
