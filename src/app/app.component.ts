import { Component, OnInit} from "@angular/core";

import { AngularFire } from 'angularfire2';

import { DataService } from "./shared/data.service";

import { LoggedInUser } from "./shared/logged-in-user.service";

@Component({
  selector: 'app-disease',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{

  constructor(private af: AngularFire,
              private dataService: DataService,
              private loggedInUser: LoggedInUser){

    let text1 = "[disease-diary]";
    let text2 = "constructor";
    console.log(text1 + "" + text2);

  };

  ngOnInit(){
    let text1 = "";
    let text2 = "";
    text1 = "[disease-diary]";
    text2 = "OnInit";
    console.log(text1 + " " + text2);

    // check auth if user is still logged in !!

    this.af.auth.subscribe(auth => {
      if (auth) {
        console.log(text1 + text2 + " subscribe auth: still logged in -> " + auth);

        this.dataService.setLoggedInUser({
          id: auth.uid,
          name: auth.auth.providerData[0].uid
        });
        // set Subject Observable
        this.loggedInUser.userName.next(auth.auth.providerData[0].uid);

      } else {
        console.log(text1 + text2 + " subscribe auth: logged out -> " + auth);
      }

    });

  };
}
