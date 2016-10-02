import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DiseaseDiaryComponent } from './disease-diary.component';
import { HeaderComponent } from "./shared/header.component";
import { DiseaseDiaryDropdownDirective } from './disease-diary-dropdown.directive';
import { HomeComponent } from "./home.component";
import { TestComponent } from "./test.component";

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module';
import { DiseaseCaseModule } from './diseaseCase/diseaseCase.module';
import { DiseaseEventModule } from './diseaseEvent/diseaseEvent.module';

// now lazy loading - allUsersRouting
//import { AllUsersModule } from './allUsers/allUsers.module';
import { AllPatientsModule } from './allPatients/allPatients.module';

import { AuthService } from './shared/auth.service';
import { HelperService } from './shared/helper.service';

import { routing, appRoutingProviders } from "./disease-diary.routing";

import {AngularFireModule} from 'angularfire2';
import *as firebase from 'firebase';
import {AuthProviders} from "angularfire2/index";
import {AuthMethods} from "angularfire2/index";
//import { UserItemComponent } from './user-item/user-item.component';


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
  declarations: [
    DiseaseDiaryComponent,
	  HeaderComponent,
    DiseaseDiaryDropdownDirective,
    HomeComponent,
    TestComponent //,
    //UserItemComponent
  ],
  imports: [
	  AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    AuthModule,
    UserModule,
    PatientModule,
    DiseaseCaseModule,
    DiseaseEventModule,
	  //AllUsersModule,
	  AllPatientsModule
  ],
  providers: [
    appRoutingProviders,
	  AuthService,
    HelperService
  ],
  entryComponents: [DiseaseDiaryComponent],
  bootstrap: [DiseaseDiaryComponent]
})

export class DiseaseDiaryModule {

}
