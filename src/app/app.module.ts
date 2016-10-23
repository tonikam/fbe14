import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from "./pages/header.component";
import { HomeComponent } from "./pages/home.component";
import { LoggedInDataComponent } from "./pages/logged-in-data.component";
import { NotFoundComponent } from "./pages/not-found.component";
import { LinkListComponent } from "./pages/link-list.component";

import { AuthModule } from './auth/auth.module';
import { UserAdminModule } from './userAdmin/user-admin.module';

import { ConfigService } from "./shared/config.service";
import { AuthService } from './shared/auth.service';
import { DataService } from './shared/data.service';
import { ErrorHandlerService } from "./shared/error-handler.service";
import { ErrorLoggerService } from "./shared/error-logger.service";

import { LoggedInUser } from "./shared/logged-in-user.service";
import { CurrentPatient } from "./shared/current-patient.service";
import { CurrentDiseaseCase } from "./shared/current-disease-case.service";

import { AppRoutingModule, routedAppComponents } from "./app.routing";

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
    AppRoutingModule,
    AuthModule,
    UserAdminModule
  ],
  declarations: [
    AppComponent,
    routedAppComponents,
    HeaderComponent,
    HomeComponent,
    LoggedInDataComponent,
    NotFoundComponent,
    LinkListComponent
  ],
  providers: [
    ConfigService,
    AuthService,
    DataService,
    ErrorHandlerService,
    ErrorLoggerService,
    LoggedInUser,
    CurrentPatient,
    CurrentDiseaseCase
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
