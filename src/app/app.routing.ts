import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { RegisterComponent } from './auth/register.component';
import { LoginComponent } from './auth/login.component';
import { LoggedInDataComponent } from './pages/logged-in-data.component';
import { LinkListComponent } from './pages/link-list.component';
import { UserAdminComponent } from './userAdmin/user-admin.component';
import { NotFoundComponent } from './pages/not-found.component';
import { ErrorComponent } from './pages/error.component';
import { HeaderComponent } from './pages/header.component';

export const app_routes: Routes = [
    //{path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: '', component: HomeComponent},
    {path: 'home', pathMatch: 'full', redirectTo: '/'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'loggedInData', component: LoggedInDataComponent},
    {path: 'linkList', component: LinkListComponent},
    {path: 'userAdmin', component: UserAdminComponent},
    {
        path: 'users',
        loadChildren: 'app/+users/users.module#UsersModule'
    },
    {
        path: 'patients',
        loadChildren: 'app/+patients/patients.module#PatientsModule'
    },
    {
        path: 'diseaseCases/:patientKey',
        loadChildren: 'app/+diseaseCases/diseaseCases.module#DiseaseCasesModule'
    },
    {
        path: 'diseaseEvents/:diseaseCaseKey',
        loadChildren: 'app/+diseaseEvents/diseaseEvents.module#DiseaseEventsModule'
    },
    {path: 'error', component: ErrorComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routedAppComponents = [
    HomeComponent,
    HeaderComponent,
    LoggedInDataComponent,
    ErrorComponent,
    NotFoundComponent,
    LinkListComponent
];
