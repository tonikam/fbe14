import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DataService } from "../../shared/data.service";

@Component({
  selector: '[diseaseCase-diseaseEvent]',
  templateUrl: 'case-event.component.html'
})
export class DiseaseCaseDiseaseEventComponent implements OnInit {
  @Input() diseaseCase: any;
  @Input() diseaseEvent: any;

  isSuccessVisible: boolean;
  isWarningVisible: boolean;

  diseaseEventKey: String;

  constructor(private router: Router,
              private dataService: DataService){

    this.isWarningVisible = this.checkDiseaseEventStatus();
  };

  ngOnInit(){
    this.diseaseEventKey = this.diseaseEvent.$key;
  }

  updateDiseaseEvent(key_value) {
    this.dataService.updateDiseaseEvent(this.diseaseCase.$key, this.diseaseEvent.$key, key_value)
  };

  checkDiseaseEventStatus() {
    // checking case status of patient
    return false;
  }
}

