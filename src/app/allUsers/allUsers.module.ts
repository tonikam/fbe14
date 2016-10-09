import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AllUsersRoutingModule, routedAllUsersComponents} from "./allUsers.routing";

import {DataService} from "../shared/data.service";

import { UserListComponent } from './user-items/user-list.component';
import { UserPatientComponent } from './user-items/user-patient.component';
import { UserRowComponent } from './user-items/user-row.component';

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      AllUsersRoutingModule
    ],
    declarations: [
      UserListComponent,
      UserPatientComponent,
      UserRowComponent,
      routedAllUsersComponents
    ],
    providers: [
      DataService
    ]
})
export class AllUsersModule {}
