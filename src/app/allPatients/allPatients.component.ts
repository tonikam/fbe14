import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: './allPatients.component.html'
})
export class AllPatientsComponent {

  actUser: FirebaseObjectObservable<any>;
  allPatients: Observable<any[]>;

  constructor(private af: AngularFire) {

    this.actUser = af.database.object('/_db2/users/uid1');

    this.allPatients = af.database.list('/_db2/patients/uid1')
		.map((allPatients) => {
			return allPatients.map((patient) =>
			{
				patient.cases = af.database.list(`/_db2/cases/${patient.$key}`)
         return patient;
			});
		});
  }

}
