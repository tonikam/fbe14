import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[diseaseEvents-item]',
  templateUrl: 'diseaseEvents-item.component.html'
})
export class DiseaseEventsItemComponent implements OnInit {
  @Input() diseaseEvent: any;

  diseaseEventKey: String;

  constructor(){};

  ngOnInit() {
    this.diseaseEventKey = this.diseaseEvent.$key;
  }

}

