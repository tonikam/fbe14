import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  templateUrl: './user-admin.component.html'
})
export class UserAdminComponent {

  users: FirebaseListObservable<any>;
  patient: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.users = af.database.list('_db2/users');
  };

  updateUser(key: string, role: boolean) {
    let newRole = "10";
    if (role ==  true){
      newRole = "99";
    }
    console.log("[updateUser] key: " + key + " role: " + newRole);
    this.users.update(key, { role: newRole });
  }

  deleteUser(key: string) {
    alert("Delete temporarily deactivated!");
    //this.users.remove(key);
  };
}
