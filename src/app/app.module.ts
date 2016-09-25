import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { HomeComponent } from "./home.component";
import { TestComponent } from "./test.component";

import { AuthModule } from './auth/auth.module';
import { DiseaseCaseModule } from './diseaseCase/diseaseCase.module';
import { DiseaseEventModule } from './diseaseEvent/diseaseEvent.module';
import { PatientModule } from './patient/patient.module';

import { AuthService } from './shared/auth.service';

import { routing, appRoutingProviders } from "./app.routing";

import {AngularFireModule} from 'angularfire2';
import *as firebase from 'firebase';
import {AuthProviders} from "angularfire2/index";
import {AuthMethods} from "angularfire2/index";


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
	  HeaderComponent,
    HomeComponent,
    TestComponent,
    AppComponent
  ],
  imports: [
	  AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    CommonModule,
    FormsModule,
	  routing,
	  AuthModule,
	  DiseaseCaseModule,
	  DiseaseEventModule,
	  PatientModule
  ],
  providers: [
    appRoutingProviders,
	  AuthService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
