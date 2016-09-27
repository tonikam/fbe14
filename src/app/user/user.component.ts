import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent {

  users: FirebaseListObservable<any>;
  patient: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.users = af.database.list('users');
  }

  addUser(newName: string) {
    this.users.push({ name: newName });
  }
  updateUser(key: string, newText: string) {
    this.users.update(key, { name: newText });
  }
  deleteUser(key: string) {
    this.users.remove(key);
  }
  deleteUserAll() {
    this.users.remove();
  }

}
