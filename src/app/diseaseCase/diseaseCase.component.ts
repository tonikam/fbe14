import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: './diseaseCase.component.html'
})
export class DiseaseCaseComponent {

  cases: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.cases = af.database.list('cases');
  }

  addCase(newName: string) {
    this.cases.push({ name: newName });
  }
  updateCase(key: string, newText: string) {
    this.cases.update(key, { name: newText });
  }
  deleteCase(key: string) {
    this.cases.remove(key);
  }
  deleteCaseAll() {
    this.cases.remove();
  }
}
