import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: './diseaseEvent.component.html'
})
export class DiseaseEventComponent {

  events: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.events = af.database.list('events');
  }

  addEvent(newName: string) {
    this.events.push({ name: newName });
  }
  updateEvent(key: string, newText: string) {
    this.events.update(key, { name: newText });
  }
  deleteEvent(key: string) {
    this.events.remove(key);
  }
  deleteEventAll() {
    //this.events.remove();
  }
}
