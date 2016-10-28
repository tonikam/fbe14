import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { ConfigService } from '../shared/config.service';
import { LogService } from '../shared/log.service';

@Component({
  templateUrl: './user-admin.component.html'
})
export class UserAdminComponent {

  users: FirebaseListObservable<any>;
  patient: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire,
              private logService: LogService
  ) {
    //this.users = af.database.list('_db2/users');
    this.users = af.database.list(ConfigService.firebaseDbConfig.db + ConfigService.firebaseDbConfig.users);
  };

  updateUser(key: string, role: boolean) {
    let newRole = "10";
    if (role ==  true){
      newRole = "99";
    }

    this.logService.logConsole("user-admin","updateUser","key: " + key + " role: " + newRole);
    this.users.update(key, { role: newRole });
  }

  deleteUser(key: string) {
    alert("Delete temporarily deactivated!");
    //this.users.remove(key);
  };
}
