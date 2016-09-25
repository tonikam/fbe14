import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-event',
  templateUrl: './diseaseEvent.component.html'
})
export class DiseaseEventComponent {

  events: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.events = af.database.list('events');
  }

}
