import { Injectable } from "@angular/core";

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ConfigService } from "./config.service";
import { LogService } from "./log.service";

@Injectable()
export class DataService {

  DbUsers: String;
  DbPatients: String;
  DbCases: String;
  DbEvents: String;

  constructor(private af: AngularFire,
              private logService: LogService
  ) {
    this.DbUsers = ConfigService.firebaseDbConfig.db + ConfigService.firebaseDbConfig.users;
    this.DbPatients = ConfigService.firebaseDbConfig.db + ConfigService.firebaseDbConfig.patients;
    this.DbCases = ConfigService.firebaseDbConfig.db + ConfigService.firebaseDbConfig.diseaseCases;
    this.DbEvents = ConfigService.firebaseDbConfig.db + ConfigService.firebaseDbConfig.diseaseEvents;
  };

  // Users + + + + + + + + + + + + + + +

  getUser(userKey) {
    return this.af.database.object(String(this.DbUsers) + '/' + userKey);
  };

  getAllUsersAndPatients() {
    let queryDefinitionUsers = {};
    queryDefinitionUsers = {query: {orderByKey: true}};

    //return this.af.database.list('/_db2/users', queryDefinition)
    return this.af.database.list(String(this.DbUsers), queryDefinitionUsers)
      .map((allUsers) => {
        return allUsers.map((user) => {
          //user.patients = this.af.database.list(`/_db2/patients/${user.$key}`, {query: {orderByKey: true}})

          let queryDefinitionPatients = {};
          queryDefinitionPatients = {query: {orderByChild: 'user',equalTo: user.key}};

          user.patients = this.af.database.list(String(this.DbPatients), {query: {orderByKey: true}})
          return user;
        });
      });
  };


  // Patients + + + + + + + + + + + + + + +


  getPatient(userKey, patientKey) {
    //return this.af.database.object(`/_db2/patients/` + userKey + `/` + patientKey);
    return this.af.database.object(this.DbPatients + '/' + userKey + '/' + patientKey);
  };
  getPatientx(patientKey) {
    return this.af.database.object(String(this.DbPatients) + '/' + patientKey);
  };

  updatePatient(userKey,patientKey,key_value) {
    //let patient = this.getPatient(userKey, patientKey);
    //patient.update(key_value);
  };

  updatePatientx(patientKey,key_value) {
    let patient = this.getPatientx(patientKey);
    patient.update(key_value);
  };

  createPatient(userKey,key_value) {
    //this.af.database.list(`/_db2/patients/` + userKey).push(key_value);
    //this.af.database.list(this.DbPatients + '/' + userKey).push(key_value);
  };

  createPatientx(key_value) {
    this.af.database.list(String(this.DbPatients)).push(key_value);
  };

  getPatients(userKey) {

    let queryDefinition = {};
    //queryDefinition = {query: {orderByKey: true}};
    queryDefinition = {query: {orderByChild: 'user',equalTo: userKey}};
    this.logService.logConsole("dataService", "getPatients - this.DbPatients", this.DbPatients);

    //return this.af.database.list('/_db2/patients/' + userKey, queryDefinition)
    //return this.af.database.list(this.DbPatients + '/' + userKey, queryDefinition)
    return this.af.database.list(String(this.DbPatients), queryDefinition)
        .map((allPatients) => {
          this.logService.logConsole("dataService", "getPatients - allPatients", allPatients);
          return allPatients;
        });
   };


  // Disease Cases + + + + + + + + + + + + + + +


  getDiseaseCase (patientKey, diseaseCaseKey) {
    //return this.af.database.object(`/_db2/cases/` + patientKey + `/` + diseaseCaseKey);
    return this.af.database.object(this.DbCases + '/' + patientKey + '/' + diseaseCaseKey);
  };
  getDiseaseCasex(diseaseCaseKey) {
    //return this.af.database.object(`/_db2/cases/` + patientKey + `/` + diseaseCaseKey);
    return this.af.database.object(String(this.DbCases) + '/' + diseaseCaseKey);
  };

  updateDiseaseCase(patientKey,diseaseCaseKey,key_value) {
    let diseaseCase = this.getDiseaseCase(patientKey, diseaseCaseKey);
    diseaseCase.update(key_value);
  };
  updateDiseaseCasex(diseaseCaseKey,key_value) {
    let diseaseCase = this.getDiseaseCasex(diseaseCaseKey);
    diseaseCase.update(key_value);
  };

  createDiseaseCase(patientKey,key_value) {
  //this.af.database.list(`/_db2/cases/` + patientKey).push(key_value);
  this.af.database.list(this.DbCases + '/' + patientKey).push(key_value);
  };
  createDiseaseCasex(key_value) {
    this.af.database.list(String(this.DbCases)).push(key_value);
  };

  getDiseaseCases(patientKey) {
    let queryDefinition = {};
    //queryDefinition = {query: {orderByKey: true}};
    queryDefinition = {query: {orderByChild: 'patient',equalTo: patientKey}};

    //return this.af.database.list('/_db2/cases/' + patientKey, queryDefinition)
    //return this.af.database.list(this.DbCases + '/' + patientKey, queryDefinition)
    return this.af.database.list(String(this.DbCases), queryDefinition)
      .map((allCases) => {
        return allCases;
      });
  };

  // Disease Events + + + + + + + + + + + + + + +

  getDiseaseEvent(diseaseCaseKey, diseaseEventKey) {
    //return this.af.database.object(`/_db2/events/` + diseaseCaseKey + `/` + diseaseEventKey);
    return this.af.database.object(this.DbEvents + '/' + diseaseCaseKey + '/' + diseaseEventKey);
  };
  getDiseaseEventx(diseaseEventKey) {
    //return this.af.database.object(`/_db2/events/` + diseaseCaseKey + `/` + diseaseEventKey);
    return this.af.database.object(String(this.DbEvents) + '/' + diseaseEventKey);
  };

  updateDiseaseEvent(diseaseCaseKey,diseaseEventKey,key_value) {
  let diseaseEvent = this.getDiseaseEvent(diseaseCaseKey, diseaseEventKey);
  diseaseEvent.update(key_value);
  };
  updateDiseaseEventx(diseaseEventKey,key_value) {
    let diseaseEvent = this.getDiseaseEventx(diseaseEventKey);
    diseaseEvent.update(key_value);
  };

  createDiseaseEvent(diseaseCaseKey,key_value) {
    //this.af.database.list(`/_db2/events/` + diseaseCaseKey).push(key_value);
    this.af.database.list(this.DbEvents + '/' + diseaseCaseKey).push(key_value);
  };
  createDiseaseEventx(key_value) {
    //this.af.database.list(`/_db2/events/` + diseaseCaseKey).push(key_value);
    this.af.database.list(String(this.DbEvents)).push(key_value);
  };

  getDiseaseEvents(diseaseCaseKey) {
    let queryDefinition = {};
    //queryDefinition = {query: {orderByKey: true}};
    queryDefinition = {query: {orderByChild: 'case',equalTo: diseaseCaseKey}};

    //return this.af.database.list('/_db2/events/' + diseaseCaseKey, queryDefinition)
    //return this.af.database.list(this.DbEvents + '/' + diseaseCaseKey, queryDefinition)
    return this.af.database.list(String(this.DbEvents), queryDefinition)
      .map((allEvents) => {
        return allEvents;
      });
  };
}
