import { Component, Input } from '@angular/core';

@Component({
  selector: "patient-row",
  templateUrl: './allPatientsRow.component.html'
})
export class AllPatientsRowComponent {

  @Input() patient;
}
