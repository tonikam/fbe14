import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent {

  users: FirebaseListObservable<any>;
  patient: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.users = af.database.list('_db2/users');
  }

  addUser(newName: string, newRole: string) {
    this.users.push({ name: newName, role: newRole });
  }
  updateUser(key: string, newName: string, newRole: string) {
    this.users.update(key, { name: newName, role: newRole });
  }
  deleteUser(key: string) {
    this.users.remove(key);
  }
  deleteUserAll() {
    //this.users.remove();
  }

}
