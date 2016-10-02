import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {allUsersRouting} from "./allUsers.routing";

import { AllUsersComponent } from "./allUsers.component";
import { UserItemsComponent } from './user-items/user-items.component';
import { UserItemComponent } from './user-items/user-item.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserStartComponent } from './user-start.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    declarations: [
      AllUsersComponent,
      UserItemsComponent,
      UserItemComponent,
      UserStartComponent,
      UserEditComponent,
      UserDetailComponent
    ],
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      allUsersRouting]
})
export class AllUsersModule {}
