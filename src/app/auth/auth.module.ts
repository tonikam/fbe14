import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from "@angular/router";

import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register.component";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule
    ],
    exports: [
      LoginComponent,
      RegisterComponent
    ]
})
export class AuthModule {}

/*
export const authComponents = [
  LoginComponent,
  RegisterComponent,
];
*/
