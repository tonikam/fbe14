import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {allUsersRouting} from "./allUsers.routing";

import {DataService} from "../shared/data.service";

import { AllUsersComponent } from "./allUsers.component";
import { UserListComponent } from './user-items/user-list.component';
import { UserPatientComponent } from './user-items/user-patient.component';
import { UserRowComponent } from './user-items/user-row.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserStartComponent } from './user-start.component';
import { UserNewComponent } from "./user-new/user-new.component";

@NgModule({
    declarations: [
      AllUsersComponent,
      UserListComponent,
      UserPatientComponent,
      UserRowComponent,
      UserStartComponent,
      UserEditComponent,
      UserNewComponent
    ],
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      allUsersRouting],
    providers: [
      DataService
    ]
})
export class AllUsersModule {}
