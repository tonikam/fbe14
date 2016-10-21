import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DiseaseDiaryComponent } from './disease-diary.component';
import { HeaderComponent } from "./shared/header.component";
import { HomeComponent } from "./home.component";

import { LoggedInDataComponent } from "./logged-in-data.component";
import { WrongLinkComponent } from "./wrong-link.component";
import { GitLinkComponent } from "./git-link.component";

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { ConfigService } from "./shared/config.service";
import { AuthService } from './shared/auth.service';
import { DataService } from './shared/data.service';
import { ErrorHandlerService } from "./shared/error-handler.service";
import { ErrorLoggerService } from "./shared/error-logger.service";

import { LoggedInUser } from "./shared/logged-in-user.service";
import { CurrentPatient } from "./shared/current-patient.service";

import { DiseaseRoutingModule, routedDiseaseComponents } from "./disease-diary.routing";

import { AngularFireModule } from 'angularfire2';
import *as firebase from 'firebase';

import { AuthProviders } from "angularfire2/index";
import { AuthMethods } from "angularfire2/index";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(ConfigService.firebaseConfig, ConfigService.firebaseAuthConfig),
    BrowserModule,
    CommonModule,
    FormsModule,
    DiseaseRoutingModule,
    AuthModule,
    UserModule
  ],
  declarations: [
    DiseaseDiaryComponent,
    routedDiseaseComponents,
    HeaderComponent,
    HomeComponent,
    LoggedInDataComponent,
    WrongLinkComponent,
    GitLinkComponent
  ],
  providers: [
    ConfigService,
    AuthService,
    DataService,
    ErrorHandlerService,
    ErrorLoggerService,
    LoggedInUser,
    CurrentPatient
  ],
  entryComponents: [DiseaseDiaryComponent],
  bootstrap: [DiseaseDiaryComponent]
})

export class DiseaseDiaryModule {

}
