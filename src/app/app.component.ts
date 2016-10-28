import { Component } from "@angular/core";

import { AngularFire } from 'angularfire2';
import {LoggedInDataComponent} from "./pages/logged-in-data.component";

import { LogService } from "./shared/log.service";

@Component({
  selector: 'app-disease',
  templateUrl: 'app.component.html'
})
export class AppComponent{

  constructor(private af: AngularFire,
              private logService: LogService
  ){
    this.logService.setLogActive(true);
  };
}
