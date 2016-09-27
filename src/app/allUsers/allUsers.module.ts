import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllUsersComponent } from "./allUsers.component";

@NgModule({
    declarations: [
        AllUsersComponent
    ],
    imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class AllUsersModule {}
