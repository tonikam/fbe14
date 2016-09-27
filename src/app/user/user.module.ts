import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from "./user.component";

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class UserModule {}
