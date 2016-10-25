import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule, routedUsersComponents } from "./users.routing";

import { UsersListComponent } from './users-list.component';
import { UsersPatientComponent } from './users-patient.component';
import { UsersItemComponent } from './users-item.component';

@NgModule({
    imports: [
        //FormsModule,
        //ReactiveFormsModule,
        CommonModule,
        UsersRoutingModule
    ],
    declarations: [
        UsersListComponent,
        UsersPatientComponent,
        UsersItemComponent,
        routedUsersComponents
    ],
    providers: []
})
export class UsersModule {
}
