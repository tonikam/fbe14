import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Rx";

@Injectable()
export class LoggedInUser {
  public userName = new Subject();
}
