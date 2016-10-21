import { Injectable } from "@angular/core";

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { UserLoggedIn } from "./user-logged-in.interface";


@Injectable()
export class DataService {

  private loggedInUser: UserLoggedIn;

  private lastPatientKey: String;
  private lastDiseaseCaseKey: String;


  constructor(private af: AngularFire) {};

  // Users + + + + + + + + + + + + + + +

  setLoggedInUser(loggedInUser) {
    console.log("setLoggedInUser");
    this.loggedInUser = loggedInUser;
    this.getUserRole(this.loggedInUser.id);
  };
  getLoggedInUser() {
    if (this.loggedInUser != undefined) {
      return this.loggedInUser;
    } else {
      return undefined;
    }
  };

  getUserRole (userKey) {
    this.af.database.object(`/_db2/users/` + userKey).subscribe(user => {
      this.loggedInUser.role = user.role;
    });
  };

  getUser (userKey) {
    return this.af.database.object(`/_db2/users/` + userKey);
  };

  getAllUsersAndPatients() {
    return this.af.database.list('/_db2/users', {query: {orderByKey: true}})
      .map((allUsers) => {
        return allUsers.map((user) => {
          user.patients = this.af.database.list(`/_db2/patients/${user.$key}`, {query: {orderByKey: true}})
          return user;
        });
      });
  };


  // Patients + + + + + + + + + + + + + + +


  getPatient (userKey, patientKey) {
    return this.af.database.object(`/_db2/patients/` + userKey + `/` + patientKey);
  };

  updatePatient(userKey,patientKey,key_value) {
    let patient = this.getPatient(userKey, patientKey);
    patient.update(key_value);
  };

  createPatient(userKey,key_value) {
    this.af.database.list(`/_db2/patients/` + userKey).push(key_value);
  };

  setLastPatientKey(patientKey) {
    this.lastPatientKey = patientKey;
  };

  getLastPatientKey() {
    return this.lastPatientKey;
  };

  getPatientsWithCases() {

    if (this.loggedInUser != undefined) {
      let currentUserID = this.loggedInUser.id;
      let currentUserName = this.loggedInUser.name;

      console.log('[getPatientsWithCases] Aktueller User ID:' + currentUserID);
      console.log('[getPatientsWithCases] Aktueller User Name:' + currentUserName);
      return this.af.database.list('/_db2/patients/' + currentUserID, {query: {orderByKey: true}})
        .map((allPatients) => {
          return allPatients.map((patient) =>
          {
            patient.cases = this.af.database.list(`/_db2/cases/${patient.$key}`, {query: {orderByKey: true}})
            return patient;
          });
        });
    }
  };

  // Disease Cases + + + + + + + + + + + + + + +


  getDiseaseCase (patientKey, diseaseCaseKey) {
    return this.af.database.object(`/_db2/cases/` + patientKey + `/` + diseaseCaseKey);
  };

  updateDiseaseCase(patientKey,diseaseCaseKey,key_value) {
    let diseaseCase = this.getDiseaseCase(patientKey, diseaseCaseKey);
    diseaseCase.update(key_value);
  };

  createDiseaseCase(patientKey,key_value) {
    this.af.database.list(`/_db2/cases/` + patientKey).push(key_value);
  };

  setLastDiseaseCaseKey(diseaseCaseKey) {
    this.lastDiseaseCaseKey = diseaseCaseKey;
  };

  getLastDiseaseCaseKey() {
    return this.lastDiseaseCaseKey;
  };

  getDiseaseCasesWithEvents() {

    //let patientKey = "-KTEN0tA1mGh2Ig3DqP3";
    let patientKey = this.getLastPatientKey();

    let diseaseCaseKey = this.getLastDiseaseCaseKey();

    let queryDefinition = {};
    if (diseaseCaseKey != "") {
      queryDefinition = {query: {orderByKey: true, equalTo: diseaseCaseKey}};
    } else {
      queryDefinition = {query: {orderByKey: true}};
    }
    return this.af.database.list('/_db2/cases/' + patientKey, queryDefinition)
      .map((allCases) => {
        return allCases.map((diseaseCase) =>
        {
          diseaseCase.diseaseEvents = this.af.database.list(`/_db2/events/${diseaseCase.$key}`, {query: {orderByKey: true}})
          return diseaseCase;
        });
      });
  };

  getDiseaseCaseEvents(diseaseCaseKey) {
    return this.af.database.list('/_db2/events/' + diseaseCaseKey, {query: {orderByKey: true}})
      .map((allEvents) => {
        return allEvents
      });
  };


  // Disease Events + + + + + + + + + + + + + + +


  getDiseaseEvent (diseaseCaseKey, diseaseEventKey) {
    return this.af.database.object(`/_db2/cases/` + diseaseCaseKey + `/` + diseaseEventKey);
  };

  updateDiseaseEvent(diseaseCaseKey,diseaseEventKey,key_value) {
    let diseaseEvent = this.getDiseaseCase(diseaseCaseKey, diseaseEventKey);
    diseaseEvent.update(key_value);
  };

  createDiseaseEvent(diseaseCaseKey,key_value) {
    this.af.database.list(`/_db2/events/` + diseaseCaseKey).push(key_value);
  };

}
