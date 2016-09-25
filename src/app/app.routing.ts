import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./auth/login.component";
import { RegisterComponent } from "./auth/register.component";
import { HomeComponent } from "./home.component";
import { TestComponent } from "./test.component";
import { PatientComponent } from "./patient/patient.component";
import { DiseaseCaseComponent } from "./diseaseCase/diseaseCase.component";
import { DiseaseEventComponent } from "./diseaseEvent/diseaseEvent.component";

const APP_ROUTES: Routes = [
	  {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
    {path: 'test', component: TestComponent},
    {path: 'patient', component: PatientComponent},
    //{path: 'case', component: CaseComponent},
	  {path: 'case', component: DiseaseCaseComponent},
    {path: 'event', component: DiseaseEventComponent}
];

export const appRoutingProviders : any[] = [

];

export const routing = RouterModule.forRoot(APP_ROUTES);