import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Observable } from 'rxjs';

import { DataService } from "../../shared/data.service";
import { AuthService } from "../../shared/auth.service";

@Component({
  templateUrl: './case-list.component.html'
})
export class DiseaseCaseListComponent {

  actPatientName: Observable<any>;
  lastPatientKey: String;
  allDiseaseCases: Observable<any[]>;
  diseaseCasesCount: Number;

  constructor(private dataService: DataService,
              private authService: AuthService
  ){

    this.lastPatientKey= this.dataService.getLastPatientKey();
    console.log("[case-list] lastPatientKey: " + this.lastPatientKey);
    this.allDiseaseCases = this.dataService.getDiseaseCasesWithEvents();

    this.allDiseaseCases.subscribe((queriedItems) => {this.diseaseCasesCount = queriedItems.length});

  }
}
