import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: './diseaseCase.component.html'
})
export class DiseaseCaseComponent {

  cases: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.cases = af.database.list('cases');
  }

}
