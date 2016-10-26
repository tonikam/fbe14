import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DiseaseEventsRoutingModule, routedDiseaseEventsComponents} from "./diseaseEvents.routing";

import { DiseaseEventsListComponent } from "./diseaseEvents-list.component";
import { DiseaseEventsItemComponent } from "./diseaseEvents-item.component";
import { DiseaseEventsEditComponent } from "./diseaseEvents-edit.component";
import { DiseaseEventsNewComponent } from "./diseaseEvents-new.component";

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      DiseaseEventsRoutingModule
    ],
    declarations: [
      DiseaseEventsListComponent,
      DiseaseEventsItemComponent,
      DiseaseEventsEditComponent,
      DiseaseEventsNewComponent,
      routedDiseaseEventsComponents
    ],
    providers: [
  ]
})
export class DiseaseEventsModule {}
