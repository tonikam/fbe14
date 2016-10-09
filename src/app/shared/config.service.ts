import {Injectable} from '@angular/core';
import {AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class ConfigService {
  constructor() {
  }

  public static firebaseConfig = {
    // fbe5
    apiKey: "AIzaSyAMQA61KfzbKBSxVRYJtch1LPzcC-VFblk",
    authDomain: "fbe5-17455.firebaseapp.com",
    databaseURL: "https://fbe5-17455.firebaseio.com",
    storageBucket: "fbe5-17455.appspot.com",
    messagingSenderId: "811840885015"
  };

  public static firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  };
}
