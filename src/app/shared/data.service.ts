import { Injectable } from "@angular/core";

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { UserLoggedIn } from "./user-logged-in.interface";


@Injectable()
export class DataService {

  private loggedInUser: UserLoggedIn;

  constructor(private af: AngularFire) {};

  // Users + + + + + + + + + + + + + + +

  getUserRole (userKey) {
    this.af.database.object(`/_db2/users/` + userKey).subscribe(user => {
      this.loggedInUser.role = user.role;
    });
  };

  getUser (userKey) {
    return this.af.database.object(`/_db2/users/` + userKey);
  };

  getAllUsersAndPatients() {
    let queryDefinition = {};
    queryDefinition = {query: {orderByKey: true}};

    return this.af.database.list('/_db2/users', queryDefinition)
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

  getPatients(userKey) {
    let queryDefinition = {};
    queryDefinition = {query: {orderByKey: true}};

    return this.af.database.list('/_db2/patients/' + userKey, queryDefinition)
        .map((allPatients) => {
          return allPatients;
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

  getDiseaseCases(patientKey) {
    let queryDefinition = {};
    queryDefinition = {query: {orderByKey: true}};

    return this.af.database.list('/_db2/cases/' + patientKey, queryDefinition)
      .map((allCases) => {
        return allCases;
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

  getDiseaseEvents(diseaseCaseKey) {
    let queryDefinition = {};
    queryDefinition = {query: {orderByKey: true}};

    return this.af.database.list('/_db2/events/' + diseaseCaseKey, queryDefinition)
      .map((allEvents) => {
        return allEvents;
      });
  };
}
