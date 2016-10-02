import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  template: `
    <p>
      Test Object {{test}}--{{(test | async)?.name}}
    </p>
  `,
  styles: []
})

export class TestComponent implements OnInit {

  private test: FirebaseObjectObservable<any>;
  private userKey: String;
  private patientKey: String;

  constructor(private af: AngularFire){
  };

  ngOnInit() {
    this.userKey = "uid1";
    this.patientKey = "pid1";
    this.test = this.af.database.object(`/_db2/patients/` + this.userKey + `/` + this.patientKey);


    // only breakpoint for debugging
    this.userKey = "uid1";
  };
}
