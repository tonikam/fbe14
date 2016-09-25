import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { HomeComponent } from "./home.component";
import { TestComponent } from "./test.component";

import { DiseaseCaseModule } from './diseaseCase/diseaseCase.module';
import { DiseaseEventModule } from './diseaseEvent/diseaseEvent.module';
import { PatientModule } from './patient/patient.module';

import { routing, appRoutingProviders } from "./app.routing";

import {AngularFireModule} from 'angularfire2';
import *as firebase from 'firebase';


const firebaseConfig = {
    /*
    // fbe2
    apiKey: "AIzaSyDLxXLtFAWXtOrD9mtSmLGb9uWHlOGH9SQ",
    authDomain: "fbe2-3e917.firebaseapp.com",
    databaseURL: "https://fbe2-3e917.firebaseio.com",
    storageBucket: "fbe2-3e917.appspot.com",
    messagingSenderId: "75684927389"
    */
    // fbe5
    apiKey: "AIzaSyAMQA61KfzbKBSxVRYJtch1LPzcC-VFblk",
    authDomain: "fbe5-17455.firebaseapp.com",
    databaseURL: "https://fbe5-17455.firebaseio.com",
    storageBucket: "fbe5-17455.appspot.com",
    messagingSenderId: "811840885015"
}

@NgModule({
  declarations: [
	  HeaderComponent,
    HomeComponent,
    TestComponent,
    AppComponent
  ],
  imports: [
	AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    CommonModule,
    FormsModule,
	  routing,
	  DiseaseCaseModule,
	  DiseaseEventModule,
	  PatientModule
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
