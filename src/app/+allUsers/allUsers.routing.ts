import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {AllUsersComponent} from "./allUsers.component";
import {UserListComponent} from "./user-items/user-list.component";
import {UserStartComponent} from "./user-start.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserNewComponent} from "./user-new/user-new.component";
import {UserNewModalComponent} from "./user-items/user-new-modal.component";

export const allUsers_routes: Routes = [
  { path: '', component: AllUsersComponent, children: [
    { path: '', component: UserListComponent },
    { path: ':userKey/new', component: UserNewComponent },
    //{ path: ':userKey/new', component: UserNewModalComponent },
    { path: ':patientKey/edit', component: UserEditComponent }
  ]}
];

@NgModule ({
  imports: [RouterModule.forChild(allUsers_routes)],
  exports: [RouterModule]
})

export class AllUsersRoutingModule{}

export const routedAllUsersComponents = [
  AllUsersComponent,
  UserStartComponent,
  UserEditComponent,
  UserNewComponent
];

