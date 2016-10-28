import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { ConfigService } from '../shared/config.service';
import { DataService } from '../shared/data.service';
import { LogService } from '../shared/log.service';

@Component({
  templateUrl: './user-admin.component.html'
})
export class UserAdminComponent {

  users: FirebaseListObservable<any>;

  constructor(private af: AngularFire,
              private dataService: DataService,
              private logService: LogService
  ) {
    this.users = af.database.list(ConfigService.firebaseDbConfig.db + ConfigService.firebaseDbConfig.users);
  };

  updateUser(key: string, role: boolean) {
    let newRole = "10";
    if (role ==  true){
      newRole = "99";
    }

    this.logService.logConsole("user-admin","updateUser","key: " + key + " role: " + newRole);
    this.dataService.updateUser(key, { role: newRole });
  }

  deleteUser(userKey: string) {
    alert("Delete temporarily deactivated!");
    //this.dataService.deleteUser(userKey);
  };
}
