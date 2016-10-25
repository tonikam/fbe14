import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routedAppComponents } from "./app.routing";
import { AuthModule } from './auth/auth.module';
import { UserAdminModule } from './userAdmin/user-admin.module';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

import { ConfigService } from "./shared/config.service";
import { AuthService } from './shared/auth.service';
import { DataService } from './shared/data.service';
import { ErrorHandlerService } from "./shared/error-handler.service";
import { ErrorLoggerService } from "./shared/error-logger.service";
import { LoggedInUser } from "./shared/logged-in-user.service";
import { CurrentPatient } from "./shared/current-patient.service";
import { CurrentDiseaseCase } from "./shared/current-disease-case.service";


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AuthModule,
        UserAdminModule,
        AngularFireModule.initializeApp(ConfigService.firebaseConfig, ConfigService.firebaseAuthConfig)
    ],
    declarations: [
        AppComponent,
        routedAppComponents
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
