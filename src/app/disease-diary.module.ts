import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DiseaseDiaryComponent } from './disease-diary.component';
import { HeaderComponent } from "./shared/header.component";
import { DiseaseDiaryDropdownDirective } from './disease-diary-dropdown.directive';
import { HomeComponent } from "./home.component";

import { TestComponent } from "./test.component";

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DiseasePatientModule } from './patient/patient.module';
import { DiseaseCaseModule } from './diseaseCase/diseaseCase.module';
import { DiseaseEventModule } from './diseaseEvent/diseaseEvent.module';

// now lazy loading - allUsersRouting
//import { AllUsersModule } from './allUsers/allUsers.module';
import { PatientModule } from './allPatients/patient.module';

import { AuthService } from './shared/auth.service';
import { DataService } from './shared/data.service';

import { DiseaseRoutingModule, routedDiseaseComponents } from "./disease-diary.routing";

import {AngularFireModule} from 'angularfire2';
import *as firebase from 'firebase';
import {AuthProviders} from "angularfire2/index";
import {AuthMethods} from "angularfire2/index";
import {Register} from "ts-node/dist/index";

const firebaseConfig = {
    // fbe5
    apiKey: "AIzaSyAMQA61KfzbKBSxVRYJtch1LPzcC-VFblk",
    authDomain: "fbe5-17455.firebaseapp.com",
    databaseURL: "https://fbe5-17455.firebaseio.com",
    storageBucket: "fbe5-17455.appspot.com",
    messagingSenderId: "811840885015"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  imports: [
	  AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    CommonModule,
    FormsModule,
    DiseaseRoutingModule,
    DiseasePatientModule,
    DiseaseCaseModule,
    DiseaseEventModule,
    AuthModule,
    UserModule,
	  PatientModule
  ],
  declarations: [
    DiseaseDiaryComponent,
    routedDiseaseComponents,
    HeaderComponent,
    DiseaseDiaryDropdownDirective,
    HomeComponent,
    TestComponent
  ],
  providers: [
	  AuthService,
    DataService
  ],
  entryComponents: [DiseaseDiaryComponent],
  bootstrap: [DiseaseDiaryComponent]
})

export class DiseaseDiaryModule {

}
