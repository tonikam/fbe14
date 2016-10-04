import { RouterModule, Routes } from "@angular/router";

import {AllUsersComponent} from "./allUsers.component";
import {UserStartComponent} from "./user-start.component";
import {UserEditComponent} from "./user-edit/user-edit.component";

const ALLUSERS_ROUTES: Routes = [
  { path: '', component: AllUsersComponent, children: [
    { path: '', component: UserStartComponent },
    { path: 'new', component: UserEditComponent },
    { path: ':patientKey/edit', component: UserEditComponent }
  ]}
];

export const allUsersRouting = RouterModule.forChild(ALLUSERS_ROUTES);
