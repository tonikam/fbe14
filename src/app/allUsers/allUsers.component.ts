import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: './allUsers.component.html'
})
export class AllUsersComponent {

  allUsers: Observable<any[]>;

  constructor(private af: AngularFire) {
    this.allUsers = af.database.list('/_db2/users')
		.map((allUsers) => {
			return allUsers.map((user) =>
			{
				user.patients = af.database.list(`/_db2/patients/${user.$key}`)
         return user;
			});
		});
  }

}
