import { Injectable } from "@angular/core";

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import {AuthService} from "./auth.service";

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private userID: String;

  constructor(private af: AngularFire,
              private authService: AuthService) {

  };

  getActUser() {
    let actUserID = this.authService.getActUserID();
    console.log ("aus dataService: " + actUserID);
    return this.af.database.object(`/_db3/users/` + actUserID);
  };

  setCachedUserID(userID) {
    this.userID = userID;
  };

  getCachedUserID(){
    return this.userID;
  };

  getCachedUserData(userKey) {
    return this.af.database.object(`/_db2/users/` + userKey);
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

  getPatientWithCases(userKey) {
    return this.af.database.list(`/_db2/patients/` + userKey, {query: {orderByKey: true}})
      .map((allPatients) => {
        return allPatients.map((patient) =>
        {
          patient.cases = this.af.database.list(`/_db2/cases/${patient.$key}`, {query: {orderByKey: true}})
          return patient;
        });
      });
  };

  getPatient (userKey, patientKey) {
    return this.af.database.object(`/_db2/patients/` + userKey + `/` + patientKey);
  };

  updatePatient(userKey,patientKey,key_value) {
    let patient = this.getPatient(userKey, patientKey);
    patient.update(key_value);
  };

  getTest() {
    let userKey = "uid1";
    let patientKey = "pid1";
    return this.af.database.object(`/_db2/patients/` + userKey + `/` + patientKey);
  };
}
