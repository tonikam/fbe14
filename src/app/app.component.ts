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

  };

  ngOnInit(){

    // check auth if user is still logged in !!

    this.af.auth.subscribe(auth => {
      if (auth) {
        console.log(" subscribe auth: still logged in -> " + auth);

        // set Subject Observable after page refresh/reload
        this.loggedInUser.setUserData({name: auth.auth.providerData[0].uid, key: auth.uid});

      } else {
        console.log(" subscribe auth: logged out -> " + auth);
      }

    });

  };
}
