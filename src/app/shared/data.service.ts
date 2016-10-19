import { Injectable } from "@angular/core";

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { AuthService } from "./auth.service";

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private userID: String;
  private actUser: Observable<any>;
  private actUserID: String;
  private actUserName: String;
  private actPatientID: String;


  private lastUserKey: String;
  private lastPatientKey: String;
  private lastDiseaseCaseKey: String;


  constructor(private af: AngularFire,
              private authService: AuthService) {

  };

  // Users + + + + + + + + + + + + + + +


  //   --> check this function ..
  getLastManagedUser() {
    let actUserID = this.authService.getActUserID();
    console.log ("aus dataService: " + actUserID);
    this.actUser = this.af.database.object(`/_db2/users/` + actUserID);
    return this.actUser;
  };

  /*
  getActAppUserID(user) {
    let actUserID = this.authService.getActUserID();
    console.log ("aus dataService: " + actUserID);
    return this.af.database.object(`/_db2/users/` + actUserID);
  };
  */

  setCachedUserID(userID) {
    this.userID = userID;
  };
  getCachedUserID(){
    return this.userID;
  };

  getCachedUserData(userKey) {
    return this.af.database.object(`/_db2/users/` + userKey);
  };
  getCachedUserName() {
    return this.actUserName;
  };

  // .. ... ..



  setLastUserKey(userKey) {
    this.lastUserKey = userKey;
  };
    getLastUserKey() {
    return this.lastUserKey;
  };

  getAllUsersAndPatients () {
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

  //getPatientsWithCases(user) {
  getPatientsWithCases() {
    //user.subscribe((user) => {this.actUserID = user.$key});
    this.getLastManagedUser();
    this.actUser.subscribe((user) => {
      this.actUserID = user.$key;
      this.actUserName = user.uid;
    });

    console.log('[getPatientsWithCases] Aktueller User ID:' + this.actUserID);
    console.log('[getPatientsWithCases] Aktueller User Name:' + this.actUserName);
    return this.af.database.list('/_db2/patients/' + this.actUserID, {query: {orderByKey: true}})
      .map((allPatients) => {
        return allPatients.map((patient) =>
        {
          patient.cases = this.af.database.list(`/_db2/cases/${patient.$key}`, {query: {orderByKey: true}})
          return patient;
        });
      });
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

  //getDiseaseCasesWithEvents(patient) {
  getDiseaseCasesWithEvents() {

    //patient.subscribe((patient) => {this.actPatientID = patient.$key});
    //console.log('Aktueller Patient:' + this.actPatientID);

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


  // Only Test + + + + + + + + + + + + + + +


  getTest() {
    let userKey = "uid1";
    let patientKey = "pid1";
    return this.af.database.object(`/_db2/patients/` + userKey + `/` + patientKey);
  };
}
