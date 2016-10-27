import {Injectable} from '@angular/core';

@Injectable()
export class LogService {

  private logActive: boolean;

  constructor() {
    this.logActive = false;
  }

  setLogActive(activate) {
    this.logActive = activate;
  };

  logConsole(module, info, value) {
    console.log("[" + module + "] - " + info + ": " + value);
  };
}
