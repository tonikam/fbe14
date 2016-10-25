import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { UsersComponent } from "./users.component";
import { UsersListComponent } from "./users-list.component";
//import {UserEditComponent} from "./user-edit/user-edit.component";
//import {UserNewComponent} from "./user-new/user-new.component";

export const users_routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UsersListComponent
            }
            //{ path: ':userKey/new', component: UserNewComponent },
            //{ path: ':patientKey/edit', component: UserEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(users_routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}

export const routedUsersComponents = [
    UsersComponent  //,
    //UserEditComponent,
    //UserNewComponent
];
