import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  // aktuell nicht genutzt:
  // canActivate: Parameter bei den Routes ( siehe app.routing.ts )
  // example: {path: 'diseaseEvent', component: DiseaseEventComponent, canActivate: [AuthGuard]},
  //
  // momentan im html über [ *ngIf="af.auth | async" ] gelöst

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.authService.isAuthenticated();
  }
}
