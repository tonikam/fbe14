import { Component, Input} from '@angular/core';

import { Subscription } from "rxjs/Rx";

import { DataService } from "../shared/data.service";

@Component({
  selector: '[diseaseCases-item]',
  templateUrl: 'diseaseCases-item.component.html'
})
export class DiseaseCasesItemComponent {
  @Input() diseaseCase: any;
  @Input() patientKey: String;

  constructor(private dataService: DataService) {
  };

  /*
  createDiseaseEvent(key_value) {
    //this.dataService.createDiseaseEvent(this.diseaseCase.$key,key_value);
  };
  */
}

